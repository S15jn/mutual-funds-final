function calculate() {
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const investmentPeriod = parseInt(document.getElementById('investmentPeriod').value);

    if (isNaN(investmentAmount) || isNaN(monthlyInvestment) || isNaN(investmentPeriod)) {
      document.getElementById('result').innerText = "Please enter valid numbers";
      return;
    }

    const totalInvestment = investmentAmount + (monthlyInvestment * investmentPeriod);
    const totalReturns = monthlyInvestment * ((Math.pow((1 + 0.12 / 12), (investmentPeriod * 12)) - 1) / (0.12 / 12)) * (1 + 0.12 / 12);

    const profit = totalReturns - totalInvestment;
    const annualizedReturns = ((totalReturns / totalInvestment) - 1) * 100 / investmentPeriod;

    document.getElementById('result').innerHTML = `
      Total Investment: ₹${totalInvestment.toFixed(2)}<br>
      Total Returns: ₹${totalReturns.toFixed(2)}<br>
      Profit: ₹${profit.toFixed(2)}<br>
      Annualized Returns: ${annualizedReturns.toFixed(2)}%
    `;
  }