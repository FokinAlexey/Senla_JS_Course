/**
 * for - проходит через блок кода несколько раз
 * 
 * for (statement 1; statement 2; statement 3) {// блок кода, который нужно выполнить}
 * 
 * Заявление 1 выполняется (один раз) перед выполнением блока кода
 * Заявление 2 определяет условие выполнения блока кода.
 * Заявление 3 выполняется (каждый раз) после выполнения блока кода.
 */

let text = "";
 for (let i = 0; i < 5; i++) {
  console.log(text += "The number is " + i);
}

 for (; let i < 5; ) {
  console.log(text += "The number is " + i);
}