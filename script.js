// Utils
function createElementFromHTML(htmlString) 
{
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild; 
}


// On click handler
function compute()
{
    var results = document.getElementById("result");

    var p = Number(document.getElementById("principal").value);
    var i = Number(document.getElementById("rate").value);
    var r = i / 100;
    var t = Number(document.getElementById("years").value);
    var total = p * r * t;

    if (!p || p <= 0) {
        alert("Enter a positive integer for principal");
        return;
    }

    results.innerHTML = '';

    var date = new Date();
    var y = date.getFullYear() + t;
    
    results.appendChild(
        createElementFromHTML(
            "<p>If you deposit <span class=\"text-yellow\">" + 
            p + "</span>. <br> at an interest rate of <span class=\"text-yellow\">" + 
            i + " %</span>.<br> You will receive an amount of <span class=\"text-yellow\">" + 
            total + "</span> <br> in year <span class=\"text-yellow\">" + y + "</span> </p>"
        )
    )
}


// Render value in range input
var output = document.getElementById("rate-output");
var slider = document.getElementById("rate");

output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}
