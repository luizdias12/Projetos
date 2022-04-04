var socket = io();

var messages = $('#messages');
var form = $('#form');
var input = $('#input');

function addZero(num) {
    let value = (num < 10 || num.length == 1) ? "0" + num : num;

    return value;
}

function sysDate() {
    let date = new Date();
    let dia = addZero(date.getDate());
    let mes = addZero(date.getMonth() + 1);
    let ano = date.getFullYear();
    let hora = addZero(date.getHours());
    let minuto = addZero(date.getMinutes());
    let segundo = addZero(date.getSeconds());

    let sysdate = dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto + ":" + segundo;
    return sysdate;
}

form.submit(function(e) {
    e.preventDefault();
    if (input.val()) {
        socket.emit('chat message', input.val());
        input.val('');
        input.focus();
    }
});

socket.on('chat message', function(msg) {
    var sysdate = new Date();
    messages.append("<li class='list-group-item'>" + sysDate() + " : " + "<b>" + msg + "</b></li>");
    window.scrollTo(0, document.body.scrollHeight);
});

$("#clear").click(function() {
    messages.html('');
});