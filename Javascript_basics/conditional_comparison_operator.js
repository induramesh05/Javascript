function myFunction() {
    var x = 5;
    document.getElementById("demo").innerHTML = (x == 5);

    // document.write('The value does not satisfy the condition')
}

function myFunction1() {
    var x1 = 5;
    document.getElementById("demo1").innerHTML = (x1 != 8);
}

function myFunction2() {
    var x2 = 22;
    var y2 = 5;
    x2 %= y2;
    document.getElementById("demo2").innerHTML = x2;
}

function myFunction3() {
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 18) ? "Too young" : "Old enough";
    document.getElementById("demo3").innerHTML = voteable + " to vote.";
}