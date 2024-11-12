function ChangeSelection(){
    // Updates product code and selection of options
    var s_ser, s_mod, s_contr, s_act, s_io, s_rs, s_kit, s_note;

    if(document.getElementById("xeg").checked==true){
        s_ser = "XEG";
        document.getElementById("sel1").innerHTML = s_ser;
        document.getElementById("des1").innerHTML = "2-jaws electric grippers";
    }
    if(document.getElementById("xeg16").checked==true){
        s_mod = "16";
        document.getElementById("sel2").innerHTML = s_mod;
        document.getElementById("des2").innerHTML = "Stroke: 16 mm";
    }
    if(document.getElementById("xeg32").checked==true){
        s_mod = "32";
        document.getElementById("sel2").innerHTML = s_mod;
        document.getElementById("des2").innerHTML = "Stroke: 32 mm";
    }
    if(document.getElementById("xeg48").checked==true){
        s_mod = "48";
        document.getElementById("sel2").innerHTML = s_mod;
        document.getElementById("des2").innerHTML = "Stroke: 48 mm";
    }
    if(document.getElementById("xeg64").checked==true){
        s_mod = "64";
        document.getElementById("sel2").innerHTML = s_mod;
        document.getElementById("des2").innerHTML = "Stroke: 64 mm";
    }
    if(document.getElementById("xeg32pr").checked==true){
        s_mod = "32PR";
        document.getElementById("sel2").innerHTML = s_mod;
        document.getElementById("des2").innerHTML = "Stroke: 32 mm, IP65";
    }
    if(document.getElementById("xegc1").checked==true){
        s_contr = "C1";
        document.getElementById("sel3").innerHTML = s_contr;
        document.getElementById("des3").innerHTML = "Old controller version";
    }
    if(document.getElementById("xegc2").checked==true){
        s_contr = "C2";
        document.getElementById("sel3").innerHTML = s_contr;
        document.getElementById("des3").innerHTML = "New controller version";
    }
    if(document.getElementById("act10").checked==true){
        s_act = "10";
        document.getElementById("sel4").innerHTML = s_act;
        document.getElementById("des4").innerHTML = "1.5 m-long actuator cable, straight/straight connectors";
    }
    if(document.getElementById("act1l").checked==true){
        s_act = "1L";
        document.getElementById("sel4").innerHTML = s_act;
        document.getElementById("des4").innerHTML = "1.5 m-long actuator cable, straight/right-angle connectors";
    }
     if(document.getElementById("act30").checked==true){
        s_act = "30";
        document.getElementById("sel4").innerHTML = s_act;
        document.getElementById("des4").innerHTML = "3 m-long actuator cable, straight/straight connectors";
     }
    if(document.getElementById("act3l").checked==true){
        s_act = "3L";
        document.getElementById("sel4").innerHTML = s_act;
        document.getElementById("des4").innerHTML = "3 m-long actuator cable, straight/right-angle connectors";
    }
    if(document.getElementById("act50").checked==true){
        s_act = "50";
        document.getElementById("sel4").innerHTML = s_act;
        document.getElementById("des4").innerHTML = "5 m-long actuator cable, straight/straight connectors";
    }
    if(document.getElementById("act5l").checked==true){
        s_act = "5L";
        document.getElementById("sel4").innerHTML = s_act;
        document.getElementById("des4").innerHTML = "5 m-long actuator cable, straight/right-angle connectors";
    }
    if(document.getElementById("io1").checked==true){
        s_io = "1";
        document.getElementById("sel5").innerHTML = s_io;
        document.getElementById("des5").innerHTML = "1.5 m-long I/O cable";
    }
    if(document.getElementById("io3").checked==true){
        s_io = "3";
        document.getElementById("sel5").innerHTML = s_io;
        document.getElementById("des5").innerHTML = "3 m-long I/O cable";
    }
    if(document.getElementById("io5").checked==true){
        s_io = "5";
        document.getElementById("sel5").innerHTML = s_io;
        document.getElementById("des5").innerHTML = "5 m-long I/O cable";
    }
    if(document.getElementById("rsno").checked==true){
        s_rs = "NO";
        document.getElementById("sel6").innerHTML = s_rs;
        document.getElementById("des6").innerHTML = "No RS485 communication";
    }
    if(document.getElementById("rsd5").checked==true){
        s_rs = "D5";
        document.getElementById("sel6").innerHTML = s_rs;
        document.getElementById("des6").innerHTML = "0.5 m-long RJ45/RJ45 RS485 cable";
    }
    if(document.getElementById("rs50").checked==true){
        s_rs = "50";
        document.getElementById("sel6").innerHTML = s_rs;
        document.getElementById("des6").innerHTML = "5 m-long RJ45/RJ45 RS485 cable";
    }
    if(document.getElementById("rshw").checked==true){
        s_rs = "HW";
        document.getElementById("sel6").innerHTML = s_rs;
        document.getElementById("des6").innerHTML = "1.5 m-long RJ45/DB9F RS485 cable";
    }
    if(document.getElementById("rstm").checked==true){
        s_rs = "TM";
        document.getElementById("sel6").innerHTML = s_rs;
        document.getElementById("des6").innerHTML = "1.5 m-long RJ45/DB9F RS485 cable for TM robots";
    }
    if(document.getElementById("rsur").checked==true){
        s_rs = "UR";
        document.getElementById("sel6").innerHTML = s_rs;
        document.getElementById("des6").innerHTML = "1.5 m-long RJ45/USB RS485 cable for UR+ robots";
    }
    if(document.getElementById("kitno").checked==true){
        s_kit = "NO";
        document.getElementById("sel7").innerHTML = s_kit;
        document.getElementById("des7").innerHTML = "No software controller setting kit";
    }
    if(document.getElementById("kitw2").checked==true){
        s_kit = "W2";
        document.getElementById("sel7").innerHTML = s_kit;
        document.getElementById("des7").innerHTML = "W2 software controller setting kit";
    }
    if(document.getElementById("noteno").checked==true){
        s_note = "NO";
        document.getElementById("sel8").innerHTML = s_note;
        document.getElementById("des8").innerHTML = "No optional";
    }
    if(document.getElementById("notes").checked==true){
        s_note = "S";
        document.getElementById("sel8").innerHTML = s_note;
        document.getElementById("des8").innerHTML = "Customized order";
    }
    if(document.getElementById("notesc").checked==true){
        s_note = "SC";
        document.getElementById("sel8").innerHTML = s_note;
        document.getElementById("des8").innerHTML = "Serial communication by USB cable";
    }

    document.getElementById('codelabel').value = s_ser + "-" + s_mod + "-" + s_contr + s_act + s_io + "-" + s_rs + "-" + s_kit + "-" + s_note;
}

function MakePdfFromTable(table,code){
    // By exploiting jsPDF and jsPDF-AutoTable, creates a PDF file with the content of the input HTML table and the product code.

    const doc = new jsPDF();                                                                    // New jsPDF document

    let columns = [];                                                                           // Array of header cells
    let rows = [];                                                                              // Array of table content

    let nRows = document.getElementById(table).rows.length;                                     // Gets the number of rows
    let nCols = 0;

    if(nRows > 0){
        // Gets the table headers and saves them in the columns array
        nCols = document.getElementById(table).rows[0].cells.length;                            // Gets the number of columns
        for(let i = 0;i < nCols;i++){
            columns.push(document.getElementById(table).rows[0].cells[i].innerHTML);            // Populates the array of header cells
        }

        // Gets the other cells (if they exist) and saves them in the rows 2D array
        if(nRows > 1){
            for(let j = 1;j < nRows;j++){
                let CurRow = [];
                for(let k = 0;k < nCols;k++){
                    CurRow.push(document.getElementById(table).rows[j].cells[k].innerHTML);     // Populates the array of cells of the current row
                }
                rows.push(CurRow);                                                              // Populates the array of non-header rows
            }
        }
    }

    // Sets the PDF options
    const options = {
        startY: 20,
    };
      
    // Extracts the resulting PDF file
    doc.text("Code: " + code, 10, 10);                                                          // Writes the product code
    doc.autoTable(columns, rows, options);                                                      // Builds the jsPDF-AutoTable
    doc.save("ProductCode.pdf");                                                                // Saves the output PDF file
}