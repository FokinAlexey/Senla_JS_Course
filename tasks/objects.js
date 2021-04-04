// ## Объекты
// * Создать объект с полем 'notebook' равным 'MacBook'
// * Добавить в объект из предыдущей задачи поле 'price', равное 1500 и поле currensy, равная 'dollar'
// * Добавить поле details, которое будет содержать объект с полями model и color (значения этих полей задайте сами)

(function createObject () {
    let lapTop = {
        notebook: 'MacBook',
    };
    // console.log(lapTop);
    lapTop.price = 1500;
    lapTop.currensy = 'dollar';
    lapTop.details = {
        model: 'MacBook Air',
        color: 'silver'
    };
    console.log(lapTop);
}())
