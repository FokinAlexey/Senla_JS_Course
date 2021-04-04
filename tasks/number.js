// Числа

// * Получить число Pi  из Math и округлить его до двух знаков после точки

(function piRound1 () {
    let piRound = Math.round(Math.PI*100)/100;
    console.log(`1st var: ${piRound}`);
}());

(function piRound2 () {
    let piRound = Math.PI.toFixed(2);
    console.log(`2nd var: ${piRound}`);
}());


// * Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1

(function maxAndMin () {
    let max = Math.max(10, 17, 5, 12, 15, 99, 1);
    let min = Math.min(10, 17, 5, 12, 15, 99, 1);
    console.log(`min number is: ${min}, max number is: ${max}`);
}());


// * С помощью Math.random: 
//   1. получить случайное число и округлить его до двух цифр после запятой
//   2. получить случайное число от 0 до Х

(function randomNumber1() {
    let rand = Math.random().toFixed(2);
    console.log(rand);
}());

(function randomNumber2() {
    let x = prompt('enter max number for random function');
    let rand = (Math.random()*x).toFixed(2);
    console.log(rand);
}());


// * Получить число из строки '100$'
(function numberFromString() {
    let num = parseInt('100$');
    console.log(`in 100$ you number ${num}`);
}())