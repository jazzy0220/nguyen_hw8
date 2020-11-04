const Data = {
    name: 'Nguyen',
    countries: [
        {
            name: "Vietnam" ,
            year: 2002
        },
        {
            name: "Canada" ,
            year: 2004
        },
        {
            name: "France" ,
            year: 2010
        }
    ]
}

fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(Data)
})
.then(response => response.text())
.then(result => {
    document.getElementById("result").textContent = result;
    document.getElementById("result").style.color = 'green';
    document.getElementById("result").style.border = '1px solid black';
    document.getElementById("result").style.width = "500px";
})
.catch(err => {
    console.error(err.message);
});