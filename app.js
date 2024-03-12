// var arr = [34, 54, 1, 23, 678, 72, 9, 10, 5, 89, 900];
//
// var minNumber = arr[0];
// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < minNumber) {
//         minNumber = arr[i];
//     }
// }
// console.log("Наименьшее число:", minNumber);
//
// var maxNumber = arr[0];
// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//         maxNumber = arr[i];
//     }
// }
// console.log("Наибольшее число:", maxNumber);

// задание 2)
// var number = prompt("Введите число для создания таблицы умножения:");
// if (number !== null && !isNaN(number)) {
//     console.log("Таблица умножения для числа " + number + ":");
//     for (var i = 1; i <= 10; i++) {
//         console.log(i + " * " + number + " = " + (i * number));
//     }
// } else {
//     console.log("Ошибка!");
// }

// задание 3

function countVowels(str){
    var vowels = ['а','е','ё','и','о','у','ы','э','ю','я']
    var count = 0
    for (var i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            count ++
        }
    }
    return count

}
var inputString = 'дом'
var result = countVowels(inputString)
console.log(`Количество гласных в слове ${inputString}, ${result}`)

