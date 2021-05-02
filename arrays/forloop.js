// function odd_even() {
//     for (let it = 0; it <= 20; it++) {
//         if (it % 2 === 0) {
//             document.getElementById("oddeven").innerHTML = (z + 'is even');
//             document.write('</br>')

//         } else {
//             document.getElementById("oddeven").innerHTML = (z + 'is odd');
//             document.write('</br>')
//         }
//     }
// }

function odd() {

    var text;

    for (let i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            text += i + " Is Even" + "<br>";
            document.getElementById("oddeven").innerHTML = text;

        } else {
            text += i + " Is  Odd " + "<br>";
            document.getElementById("oddeven").innerHTML = text;

        }

    }


}


function multiplier() {


    var mulnum = 9;
    var result = "";
    for (var i1 = 0; i1 <= 10; i1++) {
        var text1 = i1 * mulnum;
        result += mulnum + " * " + i1 + " = " + text1 + "</br>";


    }
    document.getElementById("multiply").innerHTML = result;

}





// innerhtml does not work



function Geeks() {


    var k = "The available values in the array are:";
    var k1 = "the new available values in the array are";
    var input = document.getElementsByName('array[]');

    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        k = k + a.value + " , ";
    }

    document.getElementById("par").innerHTML = k;
    document.getElementById("po").innerHTML = (k1);
    // var aaa = ["Anu", "Sakira", "Vincent", "Payal", "Roop"]

    // var inputfill = document.getElementById("t1").value;
    // var inputpos1 = document.getElementById("pos1").value;
    // var inputpos2 = document.getElementById("pos2").value;

    // k1 = "Filling input is " + inputfill + ", Poision 1 is" + inputpos1 + " and position 2 is " + inputpos2;
    // var result2 = aaa.fill(inputfill, inputpos1, inputpos2);
    // document.write(arr);
    // var res3 = input.fill(hello);
    // for (var i2 = 0; i2 < input.length; i2++) {
    //     var a1 = res3[i2];
    // k1 = k1 + aaa;
    // }


}