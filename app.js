'use strict';

// five questions Y or N assignment.
var dogs = prompt('Do you think I have 2 dogs? answer Y or N');
console.log('do i have dogs', dogs);

var dogsu = dogs.toUpperCase();

// 1.if else below belongs to dogs.
if (dogsu === 'Y') {
  alert('Great I do have 2 dogs.');
} else {
  alert('Nope I have 2 dogs.');
}

var car = prompt('If you had to guess do you think I own 4 cars? Y or N');
console.log('do i have 4 cars', car);

var caru = car.toUpperCase();

// 2.if else below belongs to car.
if (caru === 'N') {
  alert('I do own 4 cars :)');
} else {
  alert('Awesome looks like i have a stalker. lets continue.');
}

var age = prompt('Am I 27 Y or N');
console.log('am i 27', age);

var agel = age.toUpperCase();

// 3.if else below belongs to age
if (agel === 'Y') {
  alert('Yes I am.');
} else {
  alert('No I am 27.');
}

var code = prompt('Do you think I am new to HTML? Y or N');
console.log('experience with code?', code);

var codeu = code.toUpperCase();

// 4.if else below belongs to code
if (codeu === 'Y') {
  alert('your are right.');
} else {
  alert('Actually I am new to HTML.');
}

var food = prompt('Y or N? Is my favorite food salmon?');

var foodu = food.toUpperCase();

if (foodu === 'N') {
  alert('That is correct. My favorite food is Spaghetti.');
} else ('That is incorrect, my favorite food is actually spaghetti.');
