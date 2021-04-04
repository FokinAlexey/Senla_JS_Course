// В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"

let firstLetterUpperCase = (str) => {
    let arr = str.split(' ');
    for (let i=0; i<arr.length; i++){
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }  
    console.log(`так было: '${str}', а так стало: '${arr.join(' ')}'`);
}

firstLetterUpperCase("Я стану крутым программистом")




// * Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 2*1 или 6! = 6*5*4*3*2*1) .

const factorial = () => {
    let num = prompt("Введите число для которого хотите посчитать факториал");
    let i = 1;
    let res = 1;
    while (i <= num) {
        res *= i;
        i++;
    };
    console.log(`факториал числа ${num} равен ${res}`);
};

factorial();



// * Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"

const lighting = () => {
    let num = prompt('Введите время обратного отсчета для просветления');
    let str = '';
    for (i = num; num>0; num--){
        str = `${str} ${num},`;
    };
    console.log(`Просветление наступит через: ${str}`);
}

lighting();




// * Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.

const printOddNumber = () => {
let minNum = parseInt(prompt('Введи МИНИМАЛЬНОЕ число для диапазона вывода нечетных чисел'));
let maxNum = parseInt(prompt("Введи МАКСИМАЛЬНОЕ число для диапазона вывода нечетных чисел"));
minNum > maxNum ? alert("ошибка в диапазоне: минимальное число больше максимального") : console.log("Я получил такой список нечетных чисел:");
for (i = minNum; i <= maxNum; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    };
  };
}

printOddNumber();




// * На основе строки "теперь я мастер циклов javascript"  создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы.

let allFirstLetterUpperCase = (str) => {
    let arr = str.split(' ');
    for (let i=0; i<arr.length; i++){
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }  
    console.log(`так было: '${str}' , а так стало: '${arr.join('')}'`);
}

allFirstLetterUpperCase("теперь я мастер циклов javascript")