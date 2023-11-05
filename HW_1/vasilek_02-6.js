/*Ваше завдання полягає в тому, щоб створити функцію, яка може приймати будь-яке невід’ємне ціле число 
як аргумент і повертати його разом із цифрами в порядку спадання. По суті, переставте цифри, щоб 
отримати найбільше можливе число.

приклади:
Вхід: 42145 Вихід: 54421
Вхід: 145263 Вихід: 654321
Вхід: 123456789 Вихід: 987654321*/

function makeSort(number) {
  let str = "";
  number = String(number);

  for (let i = 9; i >= 0; i--) {
    for (let n = 0; n < number.length; n++) {
      if (Number(number[n]) === i) {
        str += number[n];
      }
    }
  }

  return Number(str);
}

console.log(makeSort(0));
console.log(makeSort(1));
console.log(makeSort(2));
