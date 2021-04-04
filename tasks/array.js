// ## Массивы

// * Используя функцию, найти последний элемент массива, не изменяя его.
const lastElement = (arr) => {
    console.log(`last element in array [${arr}]  is:  ${arr[arr.length-1]}`);
}
lastElement([1,2,3,4,5]);


// * Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].
const doubleArray = (arr) => {
    let arr2 = arr.concat(arr);
    console.log(`initial array is [${arr}] and final 'double' array is [${arr2}]`);
}
doubleArray([1, 3, 6]);


// * Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.
const madeArray = () => {
    let n = prompt('Введите число N для создания массива из последовательных чисел от 1 до N');
    let arr = [];
    for(i=0; i < n; i++) {
    arr[i] = i+1;
    } console.log(arr);
}
// madeArray();


// * Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"
function changeArray() {
    let res =[];
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].shift();
        res.push(arguments[i]);
    }
    return res;
  }
console.log('функция, которая принимает любое число массивов и удаляет из каждого массива первый элемент   ', changeArray([1, 2, 3], ['x', 'y', 'z']));



// * Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").

function sortAndReverse(str) {
    const collator =  new Intl.Collator('ru'); 
    return str.split('').sort((a,b)=>collator.compare(a,b)).reverse().join('');
}

console.log('сортированный массив (по алфавиту в обратном порядке) : ', sortAndReverse("екважбигёзд"));



// * Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
function sortArrayReverse(arr) {
    return arr.sort((a,b)=>(a-b)).reverse();
}
console.log('сортированный массив в обратном порядке :  ', sortArrayReverse([5, 2, -1, 6, 9, -9, 3]))


// * Создать функцию, которая принимает 3 аргумента:
// любой произвольный массив
// начальный номер элемента в массиве
// конечный номер
// let arr = [2, 4, 6, 8 ,1, 3, 5]
// const strangeFunc = [arr, 0 , arr.length-1];
// function strangeFunct(strangeFunc) {
//     console.log(strangeFunc);
// }
 
// strangeFunct([1, 2, 3, 4, 5]);



// * Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.
function getNewArray(arr, n1, n2) {
    const newArr = arr.splice(n1, n2-n1+1);
    return newArr;
}
console.log('Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.  ', getNewArray(['а', 'б', 'в', 'г', 'д', 'е', 7, 8, 9, 10], 1, 3 ));




// * Удвоить элементы массива, не используя циклы.,
const doubleArr = (arr) => {
    return arr.concat(arr);
}
console.log(`Удвоить элементы массива, не используя циклы`, doubleArr([1, 3, 'r', 'fff']));



// * Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
function delTwoEl(arr) {
     arr.splice(1, 2);
    return arr;
}
console.log('Удалить из массива [1, 2, 3, 4, 5] второй и третий элемент  ', delTwoEl([1, 2, 3, 4, 5]));



// * Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
function changeTwoEl(arr) {
    arr.splice(2, 2, 'три', 'четыре');
   return arr;
}
console.log('Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.  ', changeTwoEl([1, 2, 3, 4, 5]));


// * Вставить в произвольный массив любое значение после второго элемента.
function insertElement(arr) {
    arr.splice(2, 0, 'любое значение');
   return arr;
}
console.log('Вставить в произвольный массив любое значение после второго элемента [1, 2, 3, 4, 5] ', insertElement([1, 2, 3, 4, 5]));



// * Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной. 
function arrSorting(arr) {
    return arr.sort((a, b) => a.length > b.length ? 1 : -1);
};
console.log('Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной', arrSorting([[1, 2, 3, 4, 5], [1, 2, 3], [1, 2 ,3 ,4]]));
 

// Создать копию произвольного массивa
const arrayCopy = (arr) => {
    return newArray = arr.slice();
}
console.log('Создать копию произвольного массивa', arrayCopy([8,6,5,4,3]));


// * Отсортировать массив объектов по возрастающему количеству ног животных:
const animalLegsSort = (arr) => {
    return arr.sort((a, b) => a.info.legs > b.info.legs ? 1 : -1);
};

const animalLegs = [
  {kind: "tarantula", info: {legs: 8, eyes: 8}},
  {kind: "french bulldog", info: {legs: 4, eyes: 2}},
  {kind: "human", info: {legs: 2, eyes: 2}},
  {kind: "lobster", info: {legs: 10, eyes: 2}},
]

console.log('Отсортировать массив объектов по возрастающему количеству ног животных  ', animalLegsSort(animalLegs));




// * Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему.
const services = [
  {service: "service1", executionTime: 56},
  {service: "service2", executionTime: 97},
  {service: "service3", executionTime: 23},
  {service: "service4", executionTime: 65},
  {service: "service5", executionTime: 2},
  {service: "service6", executionTime: 73},
  {service: "service7", executionTime: 82},
  {service: "service8", executionTime: 19},
  {service: "service9", executionTime: 33},
  {service: "service10", executionTime: 42},
]

// const filterServices = (services, n1, n2) => {
//     services.sort((a, b) => a.executionTime > b.services.executionTime ? 1 : -1);
// }
// console.log(filterServices(services, 20, 60));
