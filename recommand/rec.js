var mutualFunds = [
    { name: "WealthGrow Fund", company: "Alpha Investment Group" },
    { name: "Prosperity Plus Fund", company: "Beta Asset Management" },
    { name: "SteadyReturns Fund", company: "Gamma Finance Corporation" },
    { name: "FutureFortune Fund", company: "Delta Capital Investments" },
    { name: "SecureSavings Fund", company: "Epsilon Wealth Advisors" },
    { name: "SmartGrowth Fund", company: "Zeta Financial Services" },
    { name: "GlobalOpportunities Fund", company: "Eta Investment Partners" },
    { name: "IncomeBuilder Fund", company: "Theta Asset Solutions" },
    { name: "BalanceBoost Fund", company: "Iota Wealth Management" },
    { name: "EquityExpress Fund", company: "Kappa Capital Ventures" },
    { name: "TechTrends Fund", company: "Lambda Investment Strategies" },
    { name: "GreenGrowth Fund", company: "Mu Asset Management" },
    { name: "ValueVista Fund", company: "Nu Financial Advisors" },
    { name: "HealthHorizon Fund", company: "Xi Capital Management" },
    { name: "RealEstate Rewards Fund", company: "Omicron Investment Solutions" },
    { name: "HighYield Harmony Fund", company: "Pi Portfolio Partners" },
    { name: "BlueChip Balance Fund", company: "Rho Wealth Consultants" },
    { name: "Innovation Insights Fund", company: "Sigma Capital Holdings" },
    { name: "WealthWise Fund", company: "Tau Financial Group" },
    { name: "DynamicDividends Fund", company: "Upsilon Asset Management" },
    { name: "EmergingMarkets Excellence Fund", company: "Phi Investment Advisors" },
    { name: "IncomeInnovator Fund", company: "Chi Capital Strategies" },
    { name: "OpportunityOutlook Fund", company: "Psi Investment Corporation" },
    { name: "RiskManaged Returns Fund", company: "Omega Financial Solutions" },
    { name: "WealthNavigator Fund", company: "Delta Asset Management" },
    { name: "CapitalGrowth Fund", company: "Alpha Capital Partners" },
    { name: "IncomeIntegrity Fund", company: "Beta Financial Consultants" },
    { name: "ValueVantage Fund", company: "Gamma Investment Management" },
    { name: "FutureFocus Fund", company: "Delta Wealth Strategies" },
    { name: "StrategicSolutions Fund", company: "Epsilon Financial Planners" }
        ];

        // Function to generate and display mutual fund recommendations
        function generateRecommendations() {
            var financialGoals = document.getElementById("financialGoals").value;
            var riskTolerance = document.getElementById("riskTolerance").value;
            var list = document.getElementById("mutualFunds");
            list.innerHTML = ""; // Clear previous recommendations

            // Logic to generate recommendations based on financial goals and risk tolerance
            // This can be customized based on your specific criteria
            // Here, we simply display dummy data
            mutualFunds.forEach(function(fund) {
                var listItem = document.createElement("li");
                listItem.textContent = fund.name + " by " + fund.company;
                list.appendChild(listItem);
            });

            // Show the recommendation section
            document.getElementById("recommendation").style.display = "block";
        }