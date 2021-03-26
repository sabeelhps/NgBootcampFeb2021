// $('button').click(function (e) {
//     // console.log(e.target)
//     let btnText = $(this).text();
//     console.log(btnText);
// })

// $('h1').click(function () {
//     $('h1').css('color', 'green');
// })


// ------------------

// keyboard events 

// $('input[type="text"]').keypress((e) => {

//     if (e.which == 13) {
//         console.log("You Hit the Enter")
//     }

//     // console.log(e);
//     console.log("Key Pressed")
// })

// $('div').on('click', function () {
//     $(this).remove();
// })

// $('div').on('mouseenter', function () {
//     $(this).css('background-color','aqua');
// })

// $('div').on('mouseleave', function () {
//     $(this).css('background-color','lightgreen');
// })

$('#btn').on('click', function () {
    $('div').slideToggle(800, function () {
        console.log("Faded Out")
    });
})