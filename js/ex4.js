document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var payment = document.querySelector('input[name="payment"]:checked').value;
    var sign ="off";
    if(document.querySelector('#promotions:checked')){
        sign = "on";
    }
    var location = document.getElementById("locations").value;

    var data = [
        ['name', name], 
        ['email', email],
        ['payment', payment],
        ['promotion', sign],
        ['location', location]
    ];

    var table = document.getElementById("information");
    table.style.border = "1px solid black";
    var tableBody = document.createElement('tbody');

    for(var i = 0; i < 5; i++){
        var row = document.createElement('tr');
        for(var j = 0; j < 2; j++){
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(`${data[i][j]}`)); 
            cell.style.borderTop = "1px solid black";
            cell.style.borderRight = "1px solid black";
            row.appendChild(cell); 
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
  });

document.getElementById('button').onclick = function() {
    var table = document.getElementById("information");
    for(var i = 1;i<table.rows.length;){
        table.deleteRow(i);
    }
}