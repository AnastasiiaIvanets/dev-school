/*У цьому маленькому завданні вам надається рядок чисел, розділених пробілами, 
і ви повинні повернути найбільше та найменше число.

приклади:
highAndLow("1 2 3 4 5"); // повертає "5 1"
highAndLow("1 2 -3 4 5"); // повертає "5 -3"
highAndLow("1 9 3 4 -5"); // повертає "9 -5"

Усі числа є дійсними Int32, перевіряти їх не потрібно.
У вхідному рядку завжди буде принаймні одне число.
Вихідний рядок має складатися з двох чисел, розділених одним пробілом, 
причому першим є найвище число.*/

function highAndLow(str) {
  str = str.split(" ");

  let max = Number(str[0]);
  let min = Number(str[0]);

  for (let i = 0; i < str.length; i++) {

    if (Number(str[i]) > max) {
      max = Number(str[i]);
    }

    if (Number(str[i]) < min) {
      min = Number(str[i]);
    }
  }

  return max + " " + min;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
console.log(highAndLow("4 -9 33 8 -5"));
