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

function criaAlert(classe, icon, iclass, msg){

    if(icon == true){
        msg2 = "<i class='"+iclass+"'></i>" + " " + msg;
    } else {
        msg2 = msg;
    }

    alert = "<div class='alert alert-"+classe+" fade show my-2' role='alert'>" +
    msg2 +
    // "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>" +
    "</div>";

    return alert;
}