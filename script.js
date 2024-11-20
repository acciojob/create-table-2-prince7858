function createTable() {
    //Write your code here
	const rows = parseInt(prompt("Enter the number of rows:"), 10);
    const columns = parseInt(prompt("Enter the number of columns:"), 10);
	 if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

	const table = document.getElementById("myTable");
  //table.style.borderCollapse = "collapse"; 
  table.style.margin = "20px";

	for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      cell.style.border = "1px solid black"; 
      cell.style.padding = "8px"; 
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
	
}
