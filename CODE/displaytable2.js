function SelectAllData() {
    var data = [];

    firebase.database().ref('JIGES-previous').on('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    var item = CurrentRecord.val();


                    data.push(item);

                }
            )

            var col = [];
            for (var i = 0; i < data.length; i++) {
                for (var ID in data[i]) {
                    if (col.indexOf(ID) === -1) {
                        col.push(ID);
                    }
                }
            }

            var table = document.createElement("table");
            table.className = "table table-striped"

            var tr = table.insertRow(-1); // TABLE ROW.

            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th"); // TABLE HEADER.
                th.innerHTML = col[i];

                ////////Can be changed.......

                if (col[i] !== "Z-Title") { // Always should be at the end. Should have the topic of the journal.
                    tr.appendChild(th);
                }
            }

            for (var i = 0; i < data.length; i++) {
                tr = table.insertRow(-1);
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    var cellContent = data[i][col[j]];
                    var columnnum = (col.length - 1);
                    var titleCell = data[i][col[columnnum]]; //Depends on the number of column
                    
                    if (cellContent === undefined) {
                        cellContent = ""
                    }
                    console.log(data[i][col[j]], i, j)
                    //gender td
                    // if the strings starts with "./" then dom create hyperlink

                    if (typeof cellContent === 'string' && cellContent.indexOf("./") === 0) {

                        var a = document.createElement('a');
                        var linkText = document.createTextNode(titleCell);
                        a.appendChild(linkText);
                        a.title = cellContent;
                        a.href = cellContent;
                        a.target = "_blank"
                        document.body.appendChild(a);
                        tabCell.append(a);

                    } else {
                        if (cellContent !== titleCell)
                            tabCell.innerHTML = cellContent
                    }

                }
            }

            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
        });

}