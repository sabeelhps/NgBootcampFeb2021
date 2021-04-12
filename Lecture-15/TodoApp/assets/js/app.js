
// Marking todo as Completed
// $('li').click(function () {
//     $(this).toggleClass('completed');
// })

$('ul').on('click', 'li', function () {
   
    $(this).toggleClass('completed');
})



// Removing todo from todoList
$('ul').on('click', 'span', function (event) {
   
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    })
    event.stopPropagation(); //to stop event bubbling
})


$('input[type="text"]').keypress(function (e) {
    if (e.which === 13) {
        const todoText = $(this).val();
        console.log(todoText);

        const todo = `<li><span><i class="far fa-trash-alt"></i></span> ${todoText}</li>`;

        $('ul').append(todo);
    }
})

$('#plus').click(function () {
    $('input[type="text"]').fadeToggle(500);
})