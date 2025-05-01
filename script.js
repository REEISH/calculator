const html = document;
const touch = html.getElementById("screen");
const add = html.getElementById("add");
const sub = html.getElementById("sub");
const mul = html.getElementById("mul");
const div = html.getElementById("div");
const clear = html.getElementById("clear");
const zero = html.getElementById("zero");
const one = html.getElementById("one");
const two = html.getElementById("two");
const three = html.getElementById("three");
const four = html.getElementById("four");
const five = html.getElementById("five");
const six = html.getElementById("six");
const seven = html.getElementById("seven");
const eight = html.getElementById("eight");
const nine = html.getElementById("nine");
const equal = html.getElementById("equal");
touch.innerText = "0";
let firstnum = null, secondnum = null, answer = null, op = false, curr_op = null;

function onAdd() {
    if (op == false) {
        if (answer != null) {
            touch.innerText = answer.toString() + " + ";
            op = true;
            curr_op = " + ";
        }
        else if (secondnum == null && firstnum != null) {
            touch.innerText = touch.innerText + " + ";
            op = true;
            curr_op = " + ";
        }
    }

}

function onSubtact() {
    if (op == false) {
        if (answer != null) {
            touch.innerText = answer.toString() + " - ";
            op = true;
            curr_op = " - ";
        }
        else if (secondnum == null && firstnum != null) {
            touch.innerText = touch.innerText + " - ";
            op = true;
            curr_op = " - ";
        }
    }
}

function onMultiply() {
    if (op == false) {
        if (answer != null) {
            touch.innerText = answer.toString() + " * ";
            op = true;
            curr_op = " * ";
        }
        else if (secondnum == null && firstnum != null) {
            touch.innerText = touch.innerText + " * ";
            op = true;
            curr_op = " * ";
        }
    }
}

function onDivide() {
    if (op == false) {
        if (answer != null) {
            touch.innerText = answer.toString() + " / ";
            op = true;
            curr_op = " / ";
        }
        else if (secondnum == null && firstnum != null) {
            touch.innerText = touch.innerText + " / ";
            op = true;
            curr_op = " / ";
        }
    }
}

function onClear() {
    touch.innerText = "0";
    op = false;
    answer = null;
    firstnum = null;
    secondnum = null;
}

function writeDigit(N = 0) {
    if (firstnum == null) {
        firstnum = N;
        console.log("GIRL");
        touch.innerText = firstnum.toString();
    }
    else if (secondnum == null && op == true) {
        secondnum = N;
        touch.innerText = touch.innerText + " " + secondnum.toString();
    }
    else if (secondnum == null && op == false) {
        firstnum = 10 * firstnum + N;
        touch.innerText = firstnum.toString();
    }
    else {
        secondnum = secondnum * 10 + N;
        console.log("GIRL");
        touch.innerText = firstnum.toString() + curr_op + secondnum.toString();
    }
}

function result() {
    if (firstnum != null && secondnum != null) {
        if (curr_op == " + ") {
            answer = firstnum + secondnum;
            touch.innerText = answer.toString();
        }
        else if (curr_op == " - ") {
            answer = firstnum - secondnum;
            touch.innerText = answer.toString();
        }
        else if (curr_op == " * ") {
            answer = firstnum * secondnum;
            touch.innerText = answer.toString();
        }
        else if (op == " / ") {
            answer = firstnum / secondnum;
            touch.innerText = answer.toString();
        }
        firstnum = answer;
        answer = null;
        secondnum = null;
        op = false;
        curr_op = null;
    }
}

zero.addEventListener("click", function () {
    writeDigit(0);
});
one.addEventListener("click", function () {
    writeDigit(1)
});
two.addEventListener("click", function () {
    writeDigit(2);
});
three.addEventListener("click", function () {
    writeDigit(3);
});
four.addEventListener("click", function () {
    writeDigit(4);
});
five.addEventListener("click", function () {
    writeDigit(5);
});
six.addEventListener("click", function () {
    writeDigit(6);
});
seven.addEventListener("click", function () {
    writeDigit(7);
});
eight.addEventListener("click", function () {
    writeDigit(8);
});
nine.addEventListener("click", function () {
    writeDigit(9);
});
add.addEventListener("click", onAdd);
sub.addEventListener("click", onSubtact);
mul.addEventListener("click", onMultiply);
div.addEventListener("click", onDivide);
clear.addEventListener("click", onClear);
equal.addEventListener("click", result);