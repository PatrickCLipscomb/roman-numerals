var romanNumeralsArray = [];
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var userInput = $('input#number').val();
    var answer = numerals(userInput);
    $('#result').text(answer);
    romanNumeralsArray = [];
  });
});

var numerals = function(number) {
  output = [];
  if ( parseInt(number) > 3999 ) {
    alert('Your number is to high.')
  } else {
    for (var i = 0; i < number.length; i++) {
      output.push(number.charAt(i));
    }
    return determiner(output);
  }
}

var determiner = function(output) {
  for (var i = output.length - 1; i > -1 ; i -= 1) {
    if ( i === output.length -1) {
      if ( output[i] === '0' ) {
      } else if ( output[i] === '1' ) {
        romanNumeralsArray.push('I');
      } else if ( output[i] === '2' ) {
        romanNumeralsArray.push('II');
      } else if ( output[i] === '3' ) {
        romanNumeralsArray.push('III');
      } else if ( output[i] === '4' ) {
        romanNumeralsArray.push('IV');
      } else if ( output[i] === '5' ) {
        romanNumeralsArray.push('V');
      } else if ( output[i] === '6' ) {
        romanNumeralsArray.push('VI');
      } else if ( output[i] === '7' ) {
        romanNumeralsArray.push('VII');
      } else if ( output[i] === '8' ) {
        romanNumeralsArray.push('VIII');
      } else if ( output[i] === '9' ) {
        romanNumeralsArray.push('IX');
      }
    } else if ( i === output.length - 2)  {
      if ( output[i] === '0' ) {
      } else if ( output[i] === '1' ) {
        romanNumeralsArray.push('X');
      } else if ( output[i] === '2' ) {
        romanNumeralsArray.push('XX');
      } else if ( output[i] === '3' ) {
        romanNumeralsArray.push('XXX');
      } else if ( output[i] === '4' ) {
        romanNumeralsArray.push('XL');
      } else if ( output[i] === '5' ) {
        romanNumeralsArray.push('L');
      } else if ( output[i] === '6' ) {
        romanNumeralsArray.push('LX');
      } else if ( output[i] === '7' ) {
        romanNumeralsArray.push('LXX');
      } else if ( output[i] === '8' ) {
        romanNumeralsArray.push('LXXX');
      } else if ( output[i] === '9' ) {
        romanNumeralsArray.push('XC');
      }
    } else if ( i === output.length - 3)  {
      if ( output[i] === '0' ) {
      } else if ( output[i] === '1' ) {
        romanNumeralsArray.push('C');
      } else if ( output[i] === '2' ) {
        romanNumeralsArray.push('CC');
      } else if ( output[i] === '3' ) {
        romanNumeralsArray.push('CCC');
      } else if ( output[i] === '4' ) {
        romanNumeralsArray.push('CD');
      } else if ( output[i] === '5' ) {
        romanNumeralsArray.push('D');
      } else if ( output[i] === '6' ) {
        romanNumeralsArray.push('DC');
      } else if ( output[i] === '7' ) {
        romanNumeralsArray.push('DCC');
      } else if ( output[i] === '8' ) {
        romanNumeralsArray.push('DCCC');
      } else if ( output[i] === '9' ) {
        romanNumeralsArray.push('CM');
      }
    } else if ( i === output.length - 4)  {
      if ( output[i] === '0' ) {
      } else if ( output[i] === '1' ) {
        romanNumeralsArray.push('M');
      } else if ( output[i] === '2' ) {
        romanNumeralsArray.push('MM');
      } else if ( output[i] === '3' ) {
        romanNumeralsArray.push('MMM');
      }
    }
  }
  romanNumeralsArray = romanNumeralsArray.reverse();
  romanNumeralsArray = romanNumeralsArray.join('');
  return romanNumeralsArray;
}
