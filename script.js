var si = document.getElementById("si");
var no = document.getElementById("no");

function sayYes(choice) {
  var formerForm = choice.parentNode;
  var outerForm = formerForm.parentNode;

  var yes = formerForm.querySelector('.si');
  var nope = formerForm.querySelector('.no');
  yes.checked = true;
  nope.checked = false;

  formerForm.querySelectorAll('.checked')[0].style.display = "block";
  formerForm.querySelectorAll('.checked')[1].style.display = "none";

  outerForm.querySelector('.invia').style.opacity = 1;
}

function sayNo(choice) {
  var formerForm = choice.parentNode;
  var outerForm = formerForm.parentNode;

  var yes = formerForm.querySelector('.si');
  var nope = formerForm.querySelector('.no');
  yes.checked = false;
  nope.checked = true;

  formerForm.querySelectorAll('.checked')[1].style.display = "block";
  formerForm.querySelectorAll('.checked')[0].style.display = "none";

  outerForm.querySelector('.invia').style.opacity = 1;
  }

function Select(elem) {
    var allForms = document.getElementsByClassName('form');
    var allMyForms = document.getElementsByClassName('myForm');

    for(var x = 0; x < allForms.length; x++) {
      allMyForms[x].style.display = "none";
    }

    var myFormElement = elem.querySelector('.myForm');
    myFormElement.style.display = "block";
}