
function myFunction() {

    //DECLARING VARIALES
    var input, filter, table, tr, td, i, column, txtValue;
    
    column = document.getElementById("Columnnum").value;
    
    
    //GETTING VALUE FROM FORM WITH FIELD "myInput"
    input = document.getElementById("myInput");
    //GETTING VALUE FROM FORM WITH FIELD "Columnnum"
    
    //setting value from input to uppercase for better match
    filter = input.value.toUpperCase();
    
    //taking all the elemnets with value in html table
    table = document.getElementById("showData");
    
    //getting all the table row value
    tr = table.getElementsByTagName("tr");
    
    
    for (i = 0; i < tr.length; i++) {
    
       //getting all the table data from a single row
      td = tr[i].getElementsByTagName("td")[column];
    
    
      //when table data exists 
      if (td) {
    
        //getting value from table
        txtValue = td.textContent || td.innerText;
    
        //checking letter by letter 
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
    }