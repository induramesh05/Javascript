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

    var text = "";

    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            text += i + " Is Even" + "<br>";
            document.getElementById("oddeven").innerHTML = text;

        } else {
            text += i + " Is  Odd " + "<br>";
            document.getElementById("oddeven").innerHTML = text;

        }

    }
}

//Multiplication tables

function multiplier() {
    // var multiplier = 9;
    // for (var i = 0; i <= 10; i++) {
    //     var result = multiplier * i;
    //     var r1 = multiplier + ' * ' + i + ' = ' + result;
    //     document.getElementById("mult").innerHTML = r1;
    // }

    var mulnum = 9;
    var result = "";
    for (var i1 = 0; i1 <= 10; i1++) {
        var text1 = i1 * mulnum;
        result = result + mulnum + " * " + i1 + " = " + text1 + "</br>";
        // document.write(result);

    }
    document.getElementById("multiply").innerHTML = result;
}

// innerhtml does not work

//Fill  Method


values = [];


function displayRecord() {
    var inp1 = document.getElementById('name1');
    var inp2 = document.getElementById('name2');
    var inp3 = document.getElementById('name3');
    var inp4 = document.getElementById('name4');
    var inp5 = document.getElementById('name5');
    values.push(inp1.value);
    values.push(inp2.value);
    values.push(inp3.value);
    values.push(inp4.value);
    values.push(inp5.value);
    inp1.value = "";
    inp2.value = "";
    inp3.value = "";
    inp4.value = "";
    inp5.value = "";

    document.getElementById("added").innerHTML = "Thank You!!!Your values are saved. Now enter your value to be filled.";
    document.getElementById("par").innerHTML = "The Values you entered are: " + values.join(", ");
}

function fill() {
    var inputfill = document.getElementById("t1").value;
    var inputpos1 = document.getElementById("pos1").value;
    var inputpos2 = document.getElementById("pos2").value;

    if (inputpos1 > 3 | inputpos2 > 4) {
        document.getElementById("Po").innerHTML = "Please enter the right values for the positions"
    } else {
        var result2 = values.fill(inputfill, inputpos1, inputpos2);

        document.getElementById("po").innerHTML = "The newly positioned values are: " + values.join(", ");
    }
}






//Reverse Method

values1 = [];

function displayRecord1() {
    var inp11 = document.getElementById('nam1');
    var inp12 = document.getElementById('nam2');
    var inp13 = document.getElementById('nam3');
    var inp14 = document.getElementById('nam4');
    var inp15 = document.getElementById('nam5');
    values1.push(inp11.value);
    values1.push(inp12.value);
    values1.push(inp13.value);
    values1.push(inp14.value);
    values1.push(inp15.value);
    inp11.value = "";
    inp12.value = "";
    inp13.value = "";
    inp14.value = "";
    inp15.value = "";
    document.getElementById("par1").innerHTML = "The Values you entered are: " + values1.join(", ");
}

function reverse() {
    var reversedNum = [];
    for (let i = values1.length - 1; i >= 0; i--) {
        reversedNum.push(values1[i]);

    }

    document.getElementById("po1").innerHTML = "The Reversed values are: " + reversedNum.join(", ");
}




//Compact Method
values2 = [];

function displayRecord2() {
    var inp1a = document.getElementById('val1a');


    values2.push(inp1a.value);

    inp1a.value = "";

    document.getElementById("par1a").innerHTML = "The Values you entered are: " + values2.join(", ");
}

function compact1() {

    document.write(compact(values2))



    document.getElementById("po1a").innerHTML = "The compact values are: " + compactNum;
}
//could not acheive


//From Pairs


var emp = {
    'person1': {
        'firstName': 'Usha',
        'id': "a123",
        'age': 50

    },
    'person2': {
        'firstName': 'Henry',
        'id': "a345",
        'age': 23
    },
    'person3': {
        'firstName': 'Madhu',
        'id': "c456",
        'age': 43
    }
}

function pairs(emp) {
    document.write(person1[1]);

}

function displayRecord3() {
    var einp1 = document.getElementById('ename1');
    var einp2 = document.getElementById('eid1');
    var einp3 = document.getElementById('eage1');
    emp.push(einp1.value);

    inp1a.value = "";

}

//could not acheive
//without listed values
values4 = [];

function displayRecord4() {
    var inp4 = document.getElementById('val4');


    values4.push(inp4.value);

    inp4.value = "";

    document.getElementById("par4").innerHTML = "The Values you entered are: " + values4.join(", ");
}

function without() {

    let values4a = values4.filter((c, index) => {
        return values4.indexOf(c) !== index;
    });

    document.getElementById("po4").innerHTML = "The duplicates values are: " + values4a;

}

//unique values
values5 = [];

function displayRecord5() {
    var inp5 = document.getElementById('val5');


    values5.push(inp5.value);

    inp5.value = "";

    document.getElementById("par5").innerHTML = "The Values you entered are: " + values5.join(", ");
}

function unique() {

    let values6 = [];
    values5.forEach((c) => {
        if (!values6.includes(c)) {
            values6.push(c);
        }
    });

    // one more method using set
    //let chars = ['A', 'B', 'A', 'C', 'B'];
    // let uniqueChars = [...new Set(chars)];

    // console.log(uniqueChars);

    //one more way
    // let uniqueChars = chars.filter((c, index) => {
    //     return chars.indexOf(c) === index;
    // });

    document.getElementById("po5").innerHTML = "The compact values are: " + values6;
}

///splicing an array

values7 = [];


function displayRecord7() {
    var ainp1 = document.getElementById('aname1');
    var ainp2 = document.getElementById('aname2');
    var ainp3 = document.getElementById('aname3');
    var ainp4 = document.getElementById('aname4');
    var ainp5 = document.getElementById('aname5');
    values7.push(ainp1.value);
    values7.push(ainp2.value);
    values7.push(ainp3.value);
    values7.push(ainp4.value);
    values7.push(ainp5.value);
    ainp1.value = "";
    ainp2.value = "";
    ainp3.value = "";
    ainp4.value = "";
    ainp5.value = "";

    document.getElementById("added").innerHTML = "Thank You!!!Your values are saved. Now enter your value to be filled.";
    document.getElementById("par7").innerHTML = "The Values you entered are: " + values7.join(", ");
}

function splicing() {
    var ainputfill1 = document.getElementById("at1").value;
    var ainputfill2 = document.getElementById("at2").value;
    var ainputpos1 = document.getElementById("apos1").value;
    var ainputpos2 = document.getElementById("apos2").value;
    var removed = values7.splice(ainputpos1, ainputpos2, ainputfill1, ainputfill2);

    document.getElementById("po7").innerHTML = "The newly positioned values are: " + values7;
    document.getElementById("po7a").innerHTML = "The removed values are: " + removed;

}

///slicing an array
values8 = [];


function displayRecord8() {
    var binp1 = document.getElementById('bname1');
    var binp2 = document.getElementById('bname2');
    var binp3 = document.getElementById('bname3');
    var binp4 = document.getElementById('bname4');
    var binp5 = document.getElementById('bname5');
    values8.push(binp1.value);
    values8.push(binp2.value);
    values8.push(binp3.value);
    values8.push(binp4.value);
    values8.push(binp5.value);
    binp1.value = "";
    binp2.value = "";
    binp3.value = "";
    binp4.value = "";
    binp5.value = "";

    document.getElementById("added").innerHTML = "Thank You!!!Your values are saved. Now enter your value to be filled.";
    document.getElementById("par8").innerHTML = "The Values you entered are: " + values8.join(", ");
}

function slicing() {

    var binputpos1 = document.getElementById("bpos1").value;
    var binputpos2 = document.getElementById("bpos2").value;
    var rem1 = values8.slice(binputpos1, binputpos2);

    // document.getElementById("po8").innerHTML = "The newly positioned values are: " + values8;
    document.getElementById("po8").innerHTML = "The sliced values are: " + rem1;
}