var socket = io();

var messages = $('#messages');
var form = $('#form');
var input = $('#input');

form.submit(function(e){
    e.preventDefault();
    if(input.val()) {
        socket.emit('chat message', input.val());
        input.val('');
        input.focus();
    }
});

socket.on('chat message', function(msg){
    var sysdate = new Date();
    messages.append("<li class='list-group-item'>" + sysdate + " : " + "<b>" + msg + "</b></li>");
    window.scrollTo(0, document.body.scrollHeight);
});

$("#clear").click(function(){
    messages.html('');
});