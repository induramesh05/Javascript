function addition() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var z = parseFloat(n1) + parseFloat(n2);
    if (!isNaN(z))
        document.getElementById("add").innerHTML = z;
    else
        document.getElementById("add").innerHTML = 'Enter a real number';
}

function subtract() {
    var n3 = document.getElementById("num3").value;
    var n4 = document.getElementById("num4").value;
    var z2 = parseFloat(n3) - parseFloat(n4);
    if (!isNaN(z2))
        document.getElementById("sub").innerHTML = z2;
    else
        document.getElementById("sub").innerHTML = 'Enter a real number';
}

function multiply() {
    var n5 = document.getElementById("num5").value;
    var n6 = document.getElementById("num6").value;
    var z3 = parseFloat(n5) * parseFloat(n6);
    if (!isNaN(z3))
        document.getElementById("mul").innerHTML = z3;
    else
        document.getElementById("mul").innerHTML = 'Enter a real number';
}

function divide() {
    var n7 = document.getElementById("num7").value;
    var n8 = document.getElementById("num8").value;
    var z4 = parseFloat(n7) / parseFloat(n8);
    if (!isNaN(z4))
        document.getElementById("div").innerHTML = z4;
    else
        document.getElementById("div").innerHTML = 'Enter a real number';
}