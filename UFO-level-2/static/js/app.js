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
button.on("click", filterData);
form.on("submit",filterData);


function filterData() {

    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#filterType");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var dropdownMenu = d3.select("#selFilter");
    // Assign the value of the dropdown menu option to a variable

    var filterSel = dropdownMenu.property("value");
    // Initialize an empty array for the country's data
  
    if (filterSel == 'Date/Time') {
      var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    }
    else if (dataset == 'City') {
      var filteredData = tableData.filter(ufo => ufo.city === inputValue);
    }
    else if (dataset == 'State') {
      var filteredData = tableData.filter(ufo => ufo.state === inputValue);
    }
    else if (dataset == 'Country') {
      var filteredData = tableData.filter(ufo => ufo.country === inputValue);
  }
  else if (dataset == 'Shape') {
    var filteredData = tableData.filter(ufo => ufo.shape === inputValue);
  }

  var select_data = d3.select("tbody");
  
  select_data.html("");
  
  // append stats to the list
  select_data.append("tr").text(`${filteredData}`);

  }
  

