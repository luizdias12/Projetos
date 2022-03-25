$(document).ready(function(){

$('[data-toggle="tooltip"]').tooltip();

$('#passView').click(function(){
    $(this).toggleClass('fa-eye')
    $(this).toggleClass('fa-eye-slash')
});

});
