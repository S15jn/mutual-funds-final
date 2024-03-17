const fundsData = [
  {
    name: "Aditya Birla SL Active Debt Multi-Mgr FoF-Dir Growth",
    investmentAmount: 100,
    currentValue: 100,
    expenseRatio: 0.27,
    fundSize: 10,
    rating: 10,
    fundManager: "Kaustubh Gupta",
    annualReturns: {
      oneYear: 0.32,
      threeYear: 2.24,
      fiveYear: 9.39,
      tenYear: 0.01,
      sinceInception: 0.24
    },
    fundCompany: "Aditya Birla Sun Life Mutual Fund",
    fundCategory: "Other",
    fundType: "FoFs Domestic",
    minInvestment: 6.5,
    maxInvestment: 6.9
  },
  {
    name: "Aditya Birla SL Arbitrage Fund",
    investmentAmount: 1000,
    currentVaue: 1000,
    expenseRatio: 0.36,
    fundSize: 4288,
    rating: 10,
    fundManager: "Lovelish Solanki",
    annualReturns: {
      oneYear: 1.33,
      threeYear: 1.53,
      fiveYear: 0.72,
      tenYear: 0.56,
      sinceInception: 1.1
    },
    fundCompany: "Aditya Birla Sun Life Mutual Fund",
    fundCategory: "Hybrid",
    fundType: "Arbitrage Mutual Funds",
    minInvestment: 5.6,
    maxInvestment: 4.8,
  },
  {
    name: "Aditya Birla SL Asset Allocator FoF-Dir Growth",
    investmentAmount: 1000,
    currentVaue: 1000,
    expenseRatio: 0.53,
    fundSize: 157,
    rating: 10,
    fundManager: "Vinod Narayan Bhat",
    annualReturns: {
      oneYear: 3.44,
      threeYear: 2.67,
      fiveYear: 10.58,
      tenYear: 0.67,
      sinceInception: 1.42
    },
    fundCompany: "Aditya Birla Sun Life Mutual Fund",
    fundCategory: "Other",
    fundType: "FoFs Domestic",
    minInvestment: 2,
    maxInvestment: 18.9,
  },
  {
    name: "Aditya Birla SL Bal Bhavishya Yojna – Dir Growth",
    investmentAmount: 500,
    currentVaue: 1000,
    expenseRatio: 0.76,
    fundSize: 637,
    rating: 4,
    fundManager: "Atul Penkar",
    annualReturns: {
      oneYear: 2.18,
      threeYear: -6.37,
      fiveYear: 14.99,
      tenYear: 0.85,
      sinceInception: 0.9
    },
    fundCompany: "Aditya Birla Sun Life Mutual Fund",
    fundCategory: "Solution Oriented",
    fundType: "Childrens Funds",
    minInvestment: -0.7,
    maxInvestment: 17.1,
  },
  {
    name: "Aditya Birla SL Balanced Advantage Fund",
    investmentAmount: 100,
    currentVaue: 100,
    expenseRatio: 0.61,
    fundSize: 6386,
    rating: 10,
    fundManager: "Mohit Sharma",
    annualReturns: {
      oneYear: 3.69,
      threeYear: 1.99,
      fiveYear: 10.38,
      tenYear: 0.68,
      sinceInception: 1.39
    },
    fundCompany: "Aditya Birla Sun Life Mutual Fund",
    fundCategory: "Hybrid",
    fundType: "Dynamic Asset Allocation or Balanced Advantage",
    minInvestment: 4.5,
    maxInvestment: 18.6,
  }
];

// console.log(fundsData);



  const tableBody = document.getElementById('fundsTableBody');

  fundsData.forEach(fund => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${fund.name}</td>
      <td>${fund.investmentAmount}</td>
      <td>${fund.currentValue}</td>
      <td>${fund.expenseRatio}</td>
      <td>${fund.fundSize}</td>
      <td>${fund.rating}</td>
      <td>${fund.fundManager}</td>
      <td>1Y: ${fund.annualReturns.oneYear}, 3Y: ${fund.annualReturns.threeYear}, 5Y: ${fund.annualReturns.fiveYear}, 10Y: ${fund.annualReturns.tenYear}, Since Inception: ${fund.annualReturns.sinceInception}</td>
      <td>${fund.fundCompany}</td>
      <td>${fund.fundCategory}</td>
      <td>${fund.fundType}</td>
      <td>${fund.minInvestment}</td>
      <td>${fund.maxInvestment}</td>
    `;
    tableBody.appendChild(row);
  });