/*
Шифр Віженера — це класичний шифр, спочатку розроблений італійським криптографом Джованом Баттістою Белласо 
та опублікований у 1553 році. Він названий на честь пізнішого французького криптографа Блеза де Віженера, 
який розробив більш надійний шифр з автоключем (шифр, який включає повідомлення тексту в ключ).

Шифр простий для розуміння та впровадження, але він пережив три століття спроб зламати його, отримавши 
прізвисько «le chiffre indéchiffrable» або «нерозбірливий шифр».

З Вікіпедії:

     Шифр Віженера — це метод шифрування алфавітного тексту за допомогою серії різних шифрів Цезаря на основі 
     літер ключового слова. Це проста форма поліалфавітної заміни.

     . . .

     У шифрі Цезаря кожна літера алфавіту зсувається вздовж певної кількості місць; наприклад, у шифрі Цезаря 
     зрушення 3 A стане D, B стане E, Y стане B тощо. Шифр Віженера складається з кількох послідовно 
     розташованих шифрів Цезаря з різними значеннями зсуву.

Припустимо, що ключ повторюється протягом усього тексту, символ за символом. Зауважте, що деякі реалізації 
повторюють ключ замість символів, лише якщо вони є частиною алфавіту - тут це не так.

Зсув виходить шляхом застосування зсуву Цезаря до символу з відповідним індексом ключа в алфавіті.

Візуальне представлення:

"my secret code i want to secure"  // message
"passwordpasswordpasswordpasswor"  // key

Напишіть клас, який, отримавши ключ і алфавіт, можна використовувати для кодування та декодування шифру.
приклад

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

// creates a cipher helper with each letter substituted
// by the corresponding character in the key
var c = new VigenèreCipher(key, alphabet);

c.encode('codewars'); // returns 'rovwsoiv'
c.decode('laxxhsj');  // returns 'waffles'

Any character not in the alphabet must be left as is. For example (following from above):

c.encode('CODEWARS'); // returns 'CODEWARS'
*/

function VigenereCipher(key, abc) {
  this.abc = abc;
  this.key = key;

  this.encode = function (str) {
    let encoded = "";
    for (let i = 0; i < str.length; i++) {
      if (abc.includes(str[i])) {
        encoded += abc[(abc.indexOf(str[i]) + abc.indexOf(key[i % key.length])) % abc.length];
      } else {
        encoded += str[i];
      }
    }

    return encoded;
  };

  this.decode = function (str) {
    let decoded = "";
    for (let i = 0; i < str.length; i++) {
      if (abc.includes(str[i])) {
        decoded += abc[abc.indexOf(str[i]) - abc.indexOf(key[i % key.length]) >= 0 ?
          (abc.indexOf(str[i]) - abc.indexOf(key[i % key.length])) % abc.length :
          abc.length - Math.abs((abc.indexOf(str[i]) - abc.indexOf(key[i % key.length])))];
      } else {
        decoded += str[i];
      }
    }

    return decoded;
  };
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let key = 'password';
let c = new VigenereCipher(key, alphabet);
console.log(c.encode('codewars')); // returns 'rovwsoiv'
console.log(c.decode('rovwsoiv')); // returns 'codewars'
console.log(c.encode('waffles')); // returns 'laxxhsj'
console.log(c.decode('laxxhsj'));  // returns 'waffles'
console.log(c.encode('CODEWARS')); // returns 'CODEWARS'
console.log(c.decode('CODEWARS')); // returns 'CODEWARS'
