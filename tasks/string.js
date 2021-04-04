let string = 'string test example'

// Получить первую и последнюю букву строки
console.log(string, '-> first letter is: ', string[0], ' and last letter is: ', string[string.length-1]);


// * Сделать первую и последнюю буквы в верхнем регистре
(function firsLastLetterToUpperCase() {
    string = string.split('');
    string[0] = string[0].toUpperCase();
    string[string.length-1] = string[string.length-1].toUpperCase();
    string = string.join('');
    return console.log(string);
}());  


// * Найти положение слова string в строке
(function wordPlace() {
    
}());


// * Найти положение второго пробела


// * Получить строку со 2-ого символа длинной 6 букв


// * Получить строку с 1 по 7 символ



// * Получить из ух переменных типа number x = 20, y = 21 получить строку '2021' 
