/*Якщо ми перерахуємо всі натуральні числа нижче 10, кратні 3 або
5, ми отримуємо 3, 5, 6 і 9. Сума цих кратних дорівнює 23.

Завершіть розв’язання так, щоб воно повернуло суму всіх кратних 3
або 5 нижче переданого числа.

Крім того, якщо число від’ємне, поверніть 0.

Примітка. Якщо число кратне 3 і 5, порахуйте його лише один раз.*/

function sumMultiplies(number) {
  let sum = 0;

  if (number > 0) {
    for (let i = 0; i < number; i++) {
      if (i % 5 === 0 || i % 3 === 0) {
        sum += i;
      }
    }
  }

  return sum;
}

console.log(sumMultiplies(4));
console.log(sumMultiplies(-5));
console.log(sumMultiplies(7));
