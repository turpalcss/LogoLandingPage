$('li').hover(function(){
    $('#picture').removeClass().addClass(
    $(this).attr('rel'));
});

var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
function myBurger(x) {
  x.classList.toggle("change");
}