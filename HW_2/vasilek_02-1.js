/* Рада Codewars збирається за круглим столом із n місць. Залежно від дня d місяця лідерами ради 
будуть обрані d осіб. Ці d лідери розташовані на однаковій відстані одна від одної на столі, 
як спиці на колесі. Лідерів обирають на основі того, яка група d рівновіддалених людей має 
найбільшу сумарну честь. Пошана учасників цього дня Собору подана в масиві arr довжиною n. 
Поверніть об'єднану честь d лідерів Ради.
Дані умови:
n % d == 0, тобто. недійсних випадків не буде. Всі угруповання йдуть повністю по колу.
1 <= d <= 31, оскільки у вас не може бути 32 днів у місяці.
n > 0, тому що ви не можете мати Раду з 0 осіб. (Ви також не можете мати стіл з 0 відкритими місцями, 
тоді це буде просто тумбочка чи щось подібне)
Ви можете мати негативну честь на Codewars (але це важко зробити), і рішення може бути негативним.
приклад:
[1, 2, 3, 4], 2 -> 6, оскільки max(1+3, 2+4) == 6
[1, 5, 6, 3, 4, 2], 3 -> 11, тому що max(1+6+4, 5+3+2) == 11
[1, 1, 0], 1 -> 1, оскільки max(1, 1, 0) == 1
Підказка:
Важливо зауважити, що вам (зазвичай) не потрібно оцінювати кожну суму в масиві, 
оскільки після n/d повторень суми зациклюються самі по собі.*/

function codewarsCouncil(arr, d) {
  let n = arr.length / d;
  let result = new Array(n).fill(0);

  // for (let j = 0; j < n / d; j++) {
  //   let sum = 0;
  //   for (let i = j; i < n; i += n / d) {
  //     sum += arr[i];
  //   }

  //   result.push(sum);
  // }

  // let sum = 0;
  arr.forEach((el, i) => {
    result[i < n ? i : i % n] += el
  });




  return Math.max.apply(null, result);
}

console.log(codewarsCouncil([1, 2, 3, 4], 2));
console.log(codewarsCouncil([1, 5, 6, 3, 4, 2], 3));
console.log(codewarsCouncil([1, 1, 0], 1));
console.log(codewarsCouncil([-2, -1, -2, -2], 2));