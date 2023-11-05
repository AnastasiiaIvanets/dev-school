/* Ваше завдання — згрупувати слова в анаграми.
Що таке анаграма?
star and tsar є анаграмою одне одного, тому що ви можете переставити літери для star, щоб отримати tsar.
приклад
Типовим тестом може бути:
A typical test could be :
// input
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);
// output
[
["tsar", "star", "tars"],
["rat", "tar"],
["cheese"]
] */

function groupAnagrams(arr) {
  let anagram = [];

  for (let i = 0; i < arr.length; i++) {
    if (anagram.length === 0) {
      anagram.push([arr[i]]);
    } else {
      for (let j = 0; j < anagram.length; j++) {

        if (isAnagram(arr[i], anagram[j][0])) {
          anagram[j].push(arr[i]);
          break;
        } else if (j === anagram.length - 1) {
          anagram.push([arr[i]]);
          break;
        }
      }
    }
  }

  return anagram;
}

function isAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      second = second.replace(first[i], "", 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));

