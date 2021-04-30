function cs(a1, n1) {
    mage = 85;
    req = (parseFloat(n1) * 365) * (mage - a1);
    res = "So, you are gonna need " + req + "packets of your favorite Chips until you ripe old age of " + mage;

    document.getElementById("res1").innerHTML = res;

}