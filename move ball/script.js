var ball = document.getElementById("ball");

var body = document.getElementsByTagName("body");

let bodyWidth = body[0].getBoundingClientRect().width;
let bodyHeight = body[0].getBoundingClientRect().height;

console.log(bodyWidth);
console.log(bodyHeight);

let availWidth = bodyWidth - 50;
let availHeight = bodyHeight - 50;
console.log(availWidth);
console.log(availHeight);



var speed = 10;
let topPos = 0;
let left = 0;

document.addEventListener("keypress", function(e) {


    if (e.key === "d") {
        left += speed;
        if (left >= availWidth) {
            ball.style.left = `${availWidth}px`
        } else {
            ball.style.left = `${left}px`;
        }
    }
    if (e.key === "a") {
        left -= speed;
        if (left <= 0) {
            ball.style.left = "0px";
        } else {
            ball.style.left = `${left}px`;
        }

    }
    if (e.key === "w") {
        topPos -= speed;
        if (topPos <= 0) {
            ball.style.top = "0px";
        } else {
            ball.style.top = `${topPos}px`;
        }
    }
    if (e.key === "s") {
        topPos += speed;
        if (topPos >= availHeight) {
            ball.style.top = `${availHeight}px`;
        } else {
            ball.style.top = `${topPos}px`;
        }
    }
})