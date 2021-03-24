const btn = document.querySelector('#btn');
console.dir(btn);




btn.onclick = function (event) {
    console.log(event.target);
    console.log("SOMEONE CLICKED THE BUTTON");
}