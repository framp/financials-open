
const fs = require('fs');
const path = require('path');
const https = require('https');

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function downloadForexRates() {
    return new Promise((resolve, reject) => {
        const today = formatDate(new Date());
        const cacheDir = path.join(__dirname, '.cache');
        const cacheFile = path.join(cacheDir, `forex-ecb-${today}.xml`);

        // Check if cache directory exists, if not create it
        if (!fs.existsSync(cacheDir)) {
            fs.mkdirSync(cacheDir, { recursive: true });
        }

        // Check if we already have today's rates
        if (fs.existsSync(cacheFile)) {
            console.log(`Using cached forex rates from ${cacheFile}`);
            const xmlData = fs.readFileSync(cacheFile, 'utf8');
            resolve(xmlData);
            return;
        }

        // Download fresh rates from ECB
        console.log('Downloading forex rates from ECB...');
        const url = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';

        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                // Save to cache
                fs.writeFileSync(cacheFile, data);
                console.log(`Saved forex rates to ${cacheFile}`);
                resolve(data);
            });
        }).on('error', (err) => {
            console.error('Error downloading forex rates:', err.message);
            reject(err);
        });
    });
}

function extractRates(xmlData) {
    return new Promise((resolve, reject) => {
        // Use regex to extract the rates directly from XML
        try {
            // Extract all currency rates using a more general regex pattern
            const rateRegex = /<Cube currency=['"]([A-Z]+)['"] rate=['"]([\d.]+)['"]/g;
            const forex = {};
            let match;

            // Find all matches and add them to the forex object
            while ((match = rateRegex.exec(xmlData)) !== null) {
                const currency = match[1];
                const rate = match[2];
                forex[`EUR${currency}`] = rate;
            }

            // If no rates were found, log a warning
            if (Object.keys(forex).length === 0) {
                console.warn('No forex rates found in the XML data');
            }

            resolve(forex);
        } catch (error) {
            console.error('Error extracting rates with regex:', error);
            reject(error);
        }
    });
}

async function updateForexRates() {
    try {
        const xmlData = await downloadForexRates();
        const forex = await extractRates(xmlData);
        return forex
    } catch (error) {
        console.error('Failed to update forex rates:', error);
    }
}
(async function main() {
    try {
        const forex = await updateForexRates();
        const fs = require('fs');
        forex.EURRUB = '100'
        const forexContent = `const forex = ${JSON.stringify(forex, null, 2)};`;
        fs.writeFileSync('forex.js', forexContent);
        console.log('Forex rates saved to forex.js');

    } catch (error) {
        console.error('Error in main execution:', error);
    }
})();