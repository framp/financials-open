const data = {
  GBP: [
    {
      PensionUK: "100000",
    },
    {
      InterestRatePension: "slider(1, 0, 40, 9 )",
    },
    {
      PensionUKMaturity:
        "compoundrate( InterestRatePension / 100, 2000 + 60 - 2025 ) * PensionUK",
    },
    {
      Lloyds: "100",
    },
    {
      LiquidMoney: "Lloyds",
    },
    {
      IlliquidMoney: "PensionUK",
    },
  ],
  USD: [
    {
      FacebookSharePrice: "100",
    },
    {
      FacebookEvaluationOptimistic: "slider(2, 0, 1000, 200, 0.05)",
    },
    {
      FacebookShares: "5000 * FacebookSharePrice",
    },
    {
      FacebookSharesOptimistic: "5000 * FacebookEvaluationOptimistic",
    },
    {
      Crypto: "400 + 300 + 200",
    },
    {
      Debts: " -500",
    },
    {
      LiquidMoney: "Crypto + Debts",
    },
    {
      IlliquidMoney: "FacebookShares",
    },
  ],
  RUB: [
    {
      HouseEquity: "10000000",
    },
    {
      IlliquidMoney: "HouseEquity",
    },
  ],
  EUR: [
    {
      Land: "45000",
    },
    {
      House: "House.VillaBuildingCost",
    },
    {
      Revolut: "69.42",
    },
    {
      Airwallex: "100000",
    },
    {
      Paddle: "10000",
    },
    {
      PayPal: "5000",
    },
    {
      InteractiveBroker: "1000000",
    },
    {
      Debts: "-500",
    },
    {
      LiquidMoney:
        "Revolut + Airwallex + Paddle + PayPal + InteractiveBroker + Debts",
    },
    {
      IlliquidMoney: "Land + House.VillaBuildingCost",
    },
  ],
  Total: [
    {
      LiquidMoney:
        "GBP.LiquidMoney / Forex.EURGBP + USD.LiquidMoney / Forex.EURUSD + EUR.LiquidMoney",
    },
    {
      IlliquidMoney:
        "GBP.IlliquidMoney / Forex.EURGBP + USD.IlliquidMoney / Forex.EURUSD + RUB.IlliquidMoney / Forex.EURRUB + EUR.IlliquidMoney",
    },
    {
      NetWorth: "LiquidMoney + IlliquidMoney",
    },
  ],
  House: [
    {
      LandCost: "25000",
    },
    {
      VillaBuildingCost: "100000 + 20000 + 50000",
    },
    {
      VillaOutstandingAmounts: "1000000",
    },
    {
      MissingMoney: "VillaOutstandingAmounts - Total.LiquidMoney",
    },
    {
      BreakEven: "MissingMoney / Income.MonthlyApproximation",
    },
    {
      ProjectedEvaluation: "1000000",
    },
    {
      SalePrice: "slider(3, 1000000, 10000000, 3000000, 50000)",
    },
    {
      CGTExemption: "85430",
    },
    {
      CGTTax:
        "( ( SalePrice - ProjectedEvaluation ) - CGTExemption * 2 ) * 20 / 100",
    },
    {
      Profit:
        "SalePrice - ( LandCost + VillaBuildingCost + VillaOutstandingAmounts ) - CGTTax ",
    },
  ],
  HouseArea: [
    {
      LandArea: "1000",
    },
    {
      Habitable: "150",
    },
    {
      Garages: "30",
    },
    {
      CoveredVerandas: "40",
    },
    {
      TotalArea: "Habitable + Garages",
    },
  ],
  Income: [
    {
      RateMicrosoft: "150",
    },
    {
      RateFacebook: "200 / Forex.EURUSD",
    },
    {
      MicrosoftHours: "slider(4, 1800, 1920, 1800, 10)",
    },
    {
      FacebookHours: "slider(4, 1800, 1920, 1800, 10)",
    },
    {
      YearEndExpected:
        "(MicrosoftHours - 976) * RateMicrosoft + (FacebookHours - 845) * RateFacebook",
    },
    {
      MonthlyApproximation:
        "(30 * 52 / 12 * RateMicrosoft + 20 * 52 / 12 * RateFacebook + 8 * 52 / 12) * 87.5 / 100",
    },
    {
      TotalPreTax: "MonthlyApproximation * 12",
    },
    {
      MinSalary: "885.50",
    },
    {
      SocialInsurance: "268.50",
    },
    {
      Accountant: "2750",
    },
    {
      CorporateTax:
        "( TotalPreTax - ( MinSalary * 12 ) - ( SocialInsurance * 12 ) - Accountant ) * 12.5 / 100",
    },
    {
      RedistributableIncome:
        "TotalPreTax - CorporateTax - ( MinSalary * 12 ) - ( SocialInsurance * 12 ) - Accountant",
    },
    {
      SocialInsuranceDividends:
        "min( RedistributableIncome, 180000 ) * 2.65 / 100",
    },
    {
      TotalPersonalIncome:
        "MinSalary * 12 + RedistributableIncome - SocialInsuranceDividends ",
    },
  ],
  Expenses: [
    {
      Rent: "10000",
    },
    {
      Utilities: "( 100 + 100 + 100) + 30 * 6 + 10 * 12",
    },
    {
      School: "10000",
    },
    {
      Groceries:
        "( 41.53 + 24.46 + 37.34 + 81.87 + 59.74 + 31.36 + 10.95 + 41.26 + 24.76 + 41 + 70.01 + 48.51 + 24 + 3.67 + 92.02 + 71.10 + 66.44 + 79.90 + 45.39 + 28.46 + 75.41 + 112.64 + 61.05 + 69.73 ) * 12 + 156 + 156",
    },
    {
      Fun: "100 * 50 + 200 * 4",
    },
    {
      TotalExpenses: "Rent + Utilities + School + Groceries + Fun",
    },
  ],
};

const settings = {
  GBP: {
    unit: "£",
    money: true,
    InterestRatePension: {
      unit: "%",
      money: false,
    },
  },
  USD: {
    unit: "$",
    money: true,
  },
  RUB: {
    unit: "₽",
    money: true,
  },
  EUR: {
    unit: "€",
    money: true,
  },
  Total: {
    unit: "€",
    money: true,
  },
  House: {
    unit: "€",
    money: true,
    VatCoefficient: {
      unit: "%",
      money: false,
    },
    BreakEven: {
      unit: " months",
      money: false,
    },
  },
  HouseArea: { unit: "m²" },
  Income: {
    unit: "€",
    money: true,
    InfinitasHours: {
      unit: "",
    },
  },
  Expenses: {
    unit: "€",
    money: true,
  },
};
