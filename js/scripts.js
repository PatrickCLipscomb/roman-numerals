$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var userInput = $('input#number').val();
    numerals(userInput);
  });
});


var numerals = function(number) {
  output = [];
  for (var i = 0; i < number.length; i++) {
    output.push(number.charAt(i));
    alert(output);
  }

}
