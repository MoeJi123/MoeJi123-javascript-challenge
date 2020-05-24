// from data.js
var tableData = data;

// 1.appends a table to your web page
var tbody = d3.select("tbody");

data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// 2.listen for events and search through the date/time column to find rows that match user input.

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runFilter);
form.on("submit",runFilter);

function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    var filteredData = tableData.filter(ufo => ufo.datetime == inputValue);
    console.log(tableData);
    console.log(filteredData);
  
    // Then, select the unordered list element by class name
    var select_data = d3.select("tbody");
  
    // remove any children from the list to
    select_data.html("");
  
    // append stats to the list
    filteredData.forEach((filteredDataRow) => {
       var selectRow = select_data.append("tr");
       Object.values(filteredDataRow).forEach((cell) => {
           var selectCell = selectRow.append("td");
           selectCell.text(cell);
       }
      )}
    );
    
  };
