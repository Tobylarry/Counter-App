function myAddition() {
    document.getElementById('number').innerHTML++;
    if (number.innerHTML > 0) {
        document.getElementById('number').style.color = "yellow";
    } else {
        document.getElementById('number').style.color = "red";
    }
};

function myReset() {
    document.getElementById('number').innerHTML = 0;
    document.getElementById('number').style.color = "white";
};

function mySubtraction() {
    document.getElementById('number').innerHTML--;
    if (number.innerHTML < 0) {
        document.getElementById('number').style.color = "red";
    } else {
        document.getElementById('number').style.color = "yellow";
    }

};