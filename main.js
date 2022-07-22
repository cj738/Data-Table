var rIndex, 
    table = document.getElementById("table");
            
         function checkEmptyInput()
            {
                var isEmpty =true
                    fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value,
                    age = document.getElementById("age").value;
                    if(fname === ""){
                        alert("First Name Required");
                        isEmpty = true;
                    }
                    if(lname === ""){
                        alert("Last Name Required");
                        isEmpty = true;
                    }
                    if(age === ""){
                        alert("Age Required");
                        isEmpty = true;
                    }
                    return isEmpty;
            }
        function addHtmlTableRow()
            {
                if(!checkEmptyInput()){
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value,
            age = document.getElementById("age").value;

            cell1.innerHTML = fname;
            cell2.innerHTML = lname;
            cell3.innerHTML = age;

            selectedRowToInput();
                }
        }

        function selectedRowToInput()
        {
            
            for(var i=1; i<table.rows.length;  i++)
            {
                table.rows[i].onclick = function()
                {
                rIndex = this.rowIndex;
                document.getElementById("fname").value = this.cells[0].innerHTML;
                document.getElementById("lname").value = this.cells[1].innerHTML;
                document.getElementById("age").value = this.cells[2].innerHTML;
                };
            }
        }
        selectedRowToInput();

        function editHtmlTableSelecteedRow()
        {
           var fname = document.getElementById("fname").value,
               lname = document.getElementById("lname").value,
                age = document.getElementById("age").value;
            if(!checkEmptyInput()){
            table.rows[rIndex].cells[0].innerHTML = fname;
            table.rows[rIndex].cells[1].innerHTML = lname;
            table.rows[rIndex].cells[2].innerHTML = age;
            }
        }

        function removeSelectedRow()
        {
            table.deleteRow(rIndex);
            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("age").value = "";
        }