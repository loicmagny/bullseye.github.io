$(document).ready(function () {
    // $('.carousel').carousel();
    $('.carousel').carousel({
        fullWidth: true,
        duration: 3000
    });
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('select').formSelect();
    $('.sidenav').sidenav();

});