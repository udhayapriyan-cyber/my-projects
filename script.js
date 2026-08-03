let total = 0;

function addExpense() {
    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("expenseAmount").value);

    if (name === "" || amount <= 0) {
        alert("Enter valid details");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${name} - ₹${amount}`;

    document.getElementById("expenseList").appendChild(li);

    total += amount;
    document.getElementById("total").textContent = total;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}