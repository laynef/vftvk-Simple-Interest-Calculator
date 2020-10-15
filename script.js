function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var n = document.getElementById("years").value;
    var total = 
}

var output = document.getElementById("rate-output");
var slider = document.getElementById("rate");

output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}
