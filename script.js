let total = 0;

function addExpense() {
    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("expenseAmount").value);

    if (name === "" || amount <= 0) {
        alert("Enter valid details");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${name} - ₹${amount}
        <button onclick="deleteExpense(this, ${amount})">Delete</button>
    `;

    document.getElementById("expenseList").appendChild(li);

    total += amount;
    document.getElementById("total").textContent = total;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}

function deleteExpense(button, amount) {
    button.parentElement.remove();

    total -= amount;
    document.getElementById("total").textContent = total;
}