$(document).ready(function(){

$('[data-toggle="tooltip"]').tooltip();

$('#passView').click(function(){
    $(this).toggleClass('bi-eye-fill');
    $(this).toggleClass('bi-eye-slash-fill');

    var type = $('#pass').attr('type');
    var attr = (type == 'password') ? 'text' : 'password';
    $('#pass').attr('type', attr);
});

});
