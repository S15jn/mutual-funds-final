function calculate() {
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const investmentPeriod = parseInt(document.getElementById('investmentPeriod').value);
    const expectedAnnualReturns = parseFloat(document.getElementById('expectedAnnualReturns').value);

    if (isNaN(investmentAmount) || isNaN(investmentPeriod) || isNaN(expectedAnnualReturns)) {
      document.getElementById('result').innerText = "Please enter valid numbers";
      return;
    }

    const totalReturns = investmentAmount * Math.pow((1 + expectedAnnualReturns / 100), investmentPeriod);
    const profit = totalReturns - investmentAmount;

    document.getElementById('result').innerHTML = `
      Total Returns: ₹${totalReturns.toFixed(2)}<br>
      Profit: ₹${profit.toFixed(2)}
    `;
  }