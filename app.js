'use strict';

// user personalization
var user = prompt('what is your name ' + user);
console.log('what is your name? ', user);
// five questions Y or N assignment.
var dogs = prompt('Do you think I have 2 dogs? answer Y or N');
console.log('do i have dogs', dogs);

var dogsu = dogs.toUpperCase();

// 1.if else below belongs to dogs. answer Y
if (dogsu === 'Y') {
  alert('Great I do have 2 dogs.');
} else {
  alert('Nope I have 2 dogs.');
}

var car = prompt('If you had to guess do you think I own 4 cars? Y or N');
console.log('do i have 4 cars', car);

var caru = car.toUpperCase();

// 2.if else below belongs to car. answer Y
if (caru === 'N') {
  alert('I do own 4 cars :)');
} else {
  alert('Awesome looks like i have a stalker. lets continue.');
}

var age = prompt('Am I 27 Y or N');
console.log('am i 27', age);

var agel = age.toUpperCase();

// 3.if else below belongs to age - answer Y
if (agel === 'Y') {
  alert('Yes I am.');
} else {
  alert('No I am 27.');
}

var code = prompt('Do you think I am new to HTML? Y or N');
console.log('experience with code?', code);

var codeu = code.toUpperCase();

// 4.if else below belongs to code. answer N
if (codeu === 'Y') {
  alert('your are right.');
} else {
  alert('Actually I am new to HTML.');
}

var food = prompt('Y or N? Is my favorite food salmon?');
console.log('Spaghetti', food);

var foodu = food.toUpperCase();

// 5. if else below belongs to code. answer N
if (foodu === 'N') {
  alert('That is correct. My favorite food is Spaghetti.');
} else ('That is incorrect, my favorite food is actually spaghetti.');

// 6. guess 4 tims using numbers only.
var number;
var counter = 1;
var flag;
var guesses = 0;

while (number !== 7 && guesses < 4) {
  number = parseInt(prompt('what is my favorite number?'));
  guesses++;
  if (number < 7) {
    alert('sorry you guessed too low');
    counter++;
  } else if (number > 7) {
    alert('sorry you guess too high');
    counter++;
  } else if (number === NaN || number === null) {
    alert('please enter a number');
    counter++;
  } else if (number === 7) {
    alert('you are correct!');
    flag = true;
    break;
  }
}

console.log('counter', counter);


if (!flag) {
  alert('nope you are wrong');
}
// end of 4 guesses

// 7th question to include multiple correct answers.
// 6 tires
var drink = ['dr. pepper', 'coca-cola'];
var answer = prompt('what is one of my favorite beverages? dr. pepper, pepsi, coca-cola, mountain dew, sunkis, water, apple juice or monster?');
var wrong;
var tryAgain = 0;

while (drink && tryAgain < 3) {
  for (var i = 0; i < drink.length; i++) {
    console.log('each iteration', answer);

    if (drink[i] === answer) {
      alert('correct.');
      //  tryAgain++;
    } else if (!wrong) {
      alert('WRONG! try again. what is one of my favorite beverages? dr. pepper, pepsi, coca-cola, mountain dew, sunkis, water, apple juice or monster?');
    }
  }
  tryAgain++;
  counter++;
}

alert(user + ' you got ' + counter + ' correct ');
