let table = document.querySelector("#book-table tbody"); 

function addBook() {
    let titleValue = document.querySelector("#title").value;
    let authorValue = document.querySelector("#author").value;
    let isbnValue = document.querySelector("#isbn").value;

    if (!titleValue || !authorValue || !isbnValue) {
        alert("Please fill in all fields.");
        return;
    }

    let newRow = table.insertRow();
    let titleCell = newRow.insertCell(0);
    let authorCell = newRow.insertCell(1);
    let isbnCell = newRow.insertCell(2);
    let actionCell = newRow.insertCell(3);

    titleCell.textContent = titleValue;
    authorCell.textContent = authorValue;
    isbnCell.textContent = isbnValue;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete"); 

    deleteButton.addEventListener("click", function() {
        table.deleteRow(newRow.rowIndex - 1); 
    });

    actionCell.appendChild(deleteButton);

    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
}

document.querySelector("#submit").addEventListener("click", addBook); 
