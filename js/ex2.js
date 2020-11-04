var name, blog, create, pic;
document.getElementById("check").addEventListener("click", function(){ 
    var name = document.getElementById("input").value; 
    url = `https://api.github.com/users/${name}`;
    fetch(url).then( (response) => response.json())
    .then(user => {
        name = user.name;
        blog = user.blog;
        create = user.created_at;
        var data = [];
        var namearr = ['Name', name];
        var blogarr = ['Blog', blog];
        var createarr = ['Created',create]
        data.push(namearr);
        data.push(blogarr);
        data.push(createarr);
        pic = user.avatar_url;
        document.getElementById("image").src = `${pic}`; 
        document.getElementById("image").width = "150"; 
        var table = document.getElementById("information");
        table.innerHTML="";
        table.style.border = "1px solid black";
        var tableBody = document.createElement('tbody');

        console.log(data);
        console.log(data[0][0]);

        for(var i = 0; i < 3; i++){
            var row = document.createElement('tr');
            var cell = document.createElement('td');
            
            cell.appendChild(document.createTextNode(`${data[i][0]}`)); 
            cell.style.borderTop = "1px solid black";
            cell.style.borderRight = "1px solid black";
            cell.style.borderTopcollapse = "collapse";
            row.appendChild(cell); 

            cell = document.createElement('td');
            cell.style.borderTop = "1px solid black";
            cell.appendChild(document.createTextNode(`${data[i][1]}`)); 
            row.appendChild(cell);

            tableBody.appendChild(row);
        }
        table.appendChild(tableBody);
    }).catch( (err)=>{
        console.log(err);
    })
}); 

// #table, #table td  {border: 1px solid black; }