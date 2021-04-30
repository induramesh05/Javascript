function tellfortune1(name, job, location, partnername, children) {


    // var m = document.getElementById("name").value;
    // var n = document.getElementById("job").value;
    // var o = document.getElementById("location").value;
    // var p = document.getElementById("partnername").value;
    // var q = document.getElementById("children").value;

    var f = 'You are ' + name + ' working as a ' + job + ' in ' + location + ' and will married to ' +
        partnername + ' ' + ' with ' + children + ' kids.'


    console.log(f);

}


function puppyage(pupage) {

    var f1 = parseFloat(pupage) * 7;


    document.write("Your dog's age is " + f1 + "Dog Years");

}


// function calculateDogAge(x) {

//     dage = parseFloat(x) * 7


//     document.getElementById("f1").innerHTML = "Your dog is" + dage + " dog years old";
// }


// calculateDogAge(1.5);
// calculateDogAge(10);
// calculateDogAge(2);



/*function calculateSupply(age, numPerDay) {
    var maxAge = 85;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
    document.getElementById("mes").innerHTML = message;
}

calculateSupply(28, 36);
calculateSupply(28, 2.5);
*/



// function supply(chil, ages) {




//     var f9 = 'You are ' + chil + ' working as a ' + ages + ' in ' + location + ' and will married to ' +
//         partnername + ' ' + ' with ' + children + ' kids.'


//     document.write(f9);

// }


function lsupply(page, cage) {

    var max_age = 85;
    var mage = (85 - page) * (cage * 365)

    var fage = 'You will need ' + mage + ' packets until your ripe old age of ' + max_age + ' years.'


    document.write(fage);

}


function circle(radius) {

    var pi = 22 / 7;
    var c = 2 * pi * radius
    var a = pi * radius * radius


    document.write("Circumference of the circle is : " + c);
    document.write("<br>")
    document.write("Area of the circle is : " + a);

}

// function ctof(celcius) {

//     var far = (celsius * 9) / 5 + 32;

//     document.write("Celcius " + celcius + "°C is equal to" + far + "°F");


// }

// function ftoc(faren) {

//     var cel = ((faren - 32) * 5) / 9;

//     document.write("Fahrenheit " + faren + "°F is " + cel + "°C");
//     document.write("<br>")

// }



function celciustof(celcius) {

    var far = (celcius * 9) / 5 + 32;

    document.write("Celsius " + celcius + " C is equal to " + far + " F");
    document.write("<br>")


}

function farentoc(faren) {

    var cel = ((faren - 32) * 5) / 9;

    document.write("Fahrenheit " + faren + " F is equal to " + cel + "  C");
    document.write("<br>")


}