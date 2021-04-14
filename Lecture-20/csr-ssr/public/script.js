function refreshTodo() {
    
    $('#list').empty();

    $.get('/todo', function (data) {

        for (let item of data) {
            $('#list').append(`<li>${item}</li>`);
        }

    });
}

refreshTodo();