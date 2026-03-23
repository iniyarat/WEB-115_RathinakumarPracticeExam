document.getElementById("calculateBudget").addEventListener("click", runBudgetCalculator);

function runBudgetCalculator() {
    try {
        // get user input
        let income = prompt("Enter your monthly income (no commas):");
        let expenses = prompt("Enter your monthly expenses:");
        let months = prompt("Enter number of months:");

        // convert to numbers
        income = parseFloat(income);
        expenses = parseFloat(expenses);
        months = parseInt(months);

        // check if valid numbers
        if (isNaN(income) || isNaN(expenses) || isNaN(months)) {
            throw "Please enter valid numbers only.";
        }

        // calculations
        let monthlySavings = income - expenses;
        let totalSavings = monthlySavings * months;

        let resultsDiv = document.getElementById("budgetResults");
        resultsDiv.innerHTML = "";

        // display main results
        let incomeP = document.createElement("p");
        incomeP.textContent = "Monthly Income: $" + income.toFixed(2);

        let expensesP = document.createElement("p");
        expensesP.textContent = "Monthly Expenses: $" + expenses.toFixed(2);

        let savingsP = document.createElement("p");
        savingsP.textContent = "Monthly Savings: $" + monthlySavings.toFixed(2);

        let totalP = document.createElement("p");
        totalP.textContent = "Total Projected Savings: $" + totalSavings.toFixed(2);

        resultsDiv.appendChild(incomeP);
        resultsDiv.appendChild(expensesP);
        resultsDiv.appendChild(savingsP);
        resultsDiv.appendChild(totalP);

        // warning if negative
        if (monthlySavings < 0) {
            let warning = document.createElement("p");
            warning.textContent = "Warning: Spending exceeds income!";
            resultsDiv.appendChild(warning);
        }

        // loop for each month
        for (let i = 1; i <= months; i++) {
            let monthP = document.createElement("p");
            monthP.textContent = "Month " + i + " Savings: $" + monthlySavings.toFixed(2);
            resultsDiv.appendChild(monthP);
        }

    } catch (error) {
        alert("Error: " + error);
    }
}