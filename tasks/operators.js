// ## Выражения и операторы. Преобразование типов.
// * Записать в коротком виде:
// ```javascript
// let a = a + 5;

// let b = b * 15;
// let c = c - 3;
// let d = d % 2;
// let k = a + k;
// let l = l * b;
// let m = m * 3 * k;


// * Возвести переменную в куб, используя краткую запись.

(function cub() {
    let a = prompt('enter number');
    console.log(`cube number: ${a*=a*a}`);
}());

// * Если переменная равна “маленький”, присвоить ей значение “большой”, иначе “маленький”. Сделать тоже самое, используя тернарный оператор.

(function bigOrSmall1(){
    let b = prompt('введите слово "small" или "big"');
    if (b === 'small') {
         b = 'big';
    } else{
        b = 'small';
    } 
    console.log(`variant 1: ${b}`);
}());

(function bigOrSmall2(){
    let c = prompt('введите слово "small" или "big"');
    console.log(`variant 2: ${(c == 'small') ? 'big' : 'small'}`);
}());


// * Записать условие, используя условный оператор if:
// если переменная меньше нуля: присвоить ей строку “меньше нуля”
// если переменная равна нулю: присвоить 1
// если больше нуля: используя краткую запись, умножить переменную на 10
// Сделать тоже самое, используя тернарный оператор.

(function checkNumber1()  {
    let num = parseInt(prompt('enter number'));
    if (num<0){
        num = 'меньше нуля';
    }else if (num===0) {
        num = 1;
    } else{
        num *= 10;
    }
    console.log(num);
}());

(function checkNumber2()  {
    let num2 = parseInt(prompt('enter number'));
    (num2<0) ? (num2 = 'меньше нуля') : (num2===0) ? (num2 = 1) : (num2 *= 10);
    console.log(num2);
}());

// * Используя конструктор switch, записать следующее условие:
// ```javascript
// if(a == 'котик') {
//     console.log('котик');
//   } else if(a == 'собака') {
//     console.log('собака');
//   } else if(a == 'хомячок') {
//     console.log('хомячок');
//   } else {
//     console.log('неизвестное науке животное');
//   }
// ```
// Важно: в консоли вы должны увидеть только одно условие из 4х.

(function switchTest() {
    let animal = prompt('введи одно из слов : котик, собака, хоячок или ...');
    switch (animal) {
        case 'котик':
            console.log('котик');
         break;
        case 'собака':
            console.log('собака');
        break;
        case 'хомячок':
            console.log('хомячок');
        break;            
        default:
            console.log('неизвестное науке животное');
        break;
    }
}())


// * Чему равен x в каждом из примеров, объясните почему:
// ```javascript
// let x = 0 || 'строка';       // строка
// let x = 1 && 'строка';       //строка
// let x = null || 1;           //1
// let x = null && 1;           //null
// let x = 1 && null;           //null
// let x = null || 0 || 1;      //1
// let x = null && 0 && 1;      //null


// * Чему равен x в каждом из примеров, объясните почему:
// ```javascript

// let x = 1 + 2 + '3';     //33
// let x = 1 + 2 - '1';     //2
// let x = '1' + 2 - 1;     //11
// let x = true + 1;        //2
// let x = +'1' + 2;        //3
// let x = null + 2;        //2
// let x = undefined + 2;   //NaN
// let x = true + undefined;//NaN

