const socket = io();

$('#chat').hide()

$('#login-btn').click(() => {
    socket.emit('login', {
        name:$('#login-inp').val()
    })
    $('#login').hide();
    $('#chat').show();
})

$('#send-btn').click(() => {
    socket.emit('send_msg', {
        msg:$('#inp').val()
    })
    $('#inp').val("");
    $('.emojionearea-editor').text("");
})

socket.on('recieved_msg', (data) => {
    $('#list').append(`<li> <strong>${data.name}</strong> : ${data.msg}</li>`)
})




