// const btn = document.getElementById('btn');


// function shout() {
//     console.log("SHOUT");
// }

// function scream() {
//     console.log("SCREAM");
// }


// // PROBLEM WITH ONCLICK

// // btn.onclick = shout;
// // btn.onclick = scream;


// btn.addEventListener('click', shout);
// btn.addEventListener('click', scream);


// ------------------------------------------------


const buttons = document.querySelectorAll('button');

for (let btn of buttons) {
    
    btn.addEventListener('mouseenter', (e) => {
        // console.log(e);
        e.target.classList.toggle('first');
    })

    btn.addEventListener('mouseleave', (e) => {
        e.target.classList.toggle('first');
    })

}