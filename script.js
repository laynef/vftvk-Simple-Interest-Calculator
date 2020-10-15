function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild; 
}


function compute()
{
    var p = Number(document.getElementById("principal").value);
    var r = Number(document.getElementById("rate").value) / 100;
    var t = Number(document.getElementById("years").value);
    var total = p * r * t;

    var date = new Date();
    var y = date.getFullYear() + t;
    
    var results = document.getElementById('result');
    results.appendChild(
        createElementFromHTML(`
            <p>
                If you deposit ${p}<br>
                at an interest rate of ${r}%.<br>
                You will receive an amount of ${total}<br>
                in year ${y}
            </p>
        `)
    )
}

var output = document.getElementById("rate-output");
var slider = document.getElementById("rate");

output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}
