var que = prompt("What is your name?");
var big = que.slice(0, 1);
var bigLetters = big.toUpperCase();
var small = que.slice(1, que.length);
var smallLetters = small.toLowerCase();
alert("Hello " + bigLetters + smallLetters + "!" + " welcome to the Tindog website");