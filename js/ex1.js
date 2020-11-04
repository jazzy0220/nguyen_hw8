let url = 'https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json';
var table = document.getElementById("painting");

fetch(url).then( (response) => response.json())
.then(painting => {
    painting.map( (element) => {
        var row = table.insertRow();
        var name = element.name;
        var year = (element.year);
        var artist = (element.artist);
        for(var i = 0; i < 3; i++){
            var cell = row.insertCell(i);
            if (i == 0) cell.innerHTML = name;
            else if (i == 1) cell.innerHTML = year;
            else cell.innerHTML = artist;
            cell.style.borderTop = "1px solid black";
            if (i != 2) cell.style.borderRight = "1px solid black";
        }   
    });
}).catch( (err) =>{
    console.error(err.message);
});


