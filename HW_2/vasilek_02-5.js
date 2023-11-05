/* Дано об’єкт із ймовірно вкладених об’єктів, де кінцевим елементом є
масив, що містить додатні цілі числа, напишіть функцію, яка повертає ім’я кореневої властивості, 
у якій знаходиться певне ціле число.
наприклад
Ось як виглядає об'єкт:
object = {
"one": {
"nest1": {
"val1": [9, 34, 92, 100]
}
},
"2f7": {
"n1": [10, 92, 53, 71],
"n2": [82, 34, 6, 19]
}
}
getRootProperty(object, 9); //=> "one"
getRootProperty(object, 9) returns "one" because "one" is the root
property name where the value 9 is buried in (in an array), other root
properties may also have 9 buried in it but you should always return the first
Another Example
object = {
"r1n": {
"mkg": {
"zma": [21, 45, 66, 111],
"mii": {
"ltf": [2, 5, 3, 9, 21]
},
"fv": [1, 3, 6, 9]
},
"rmk": {
"amr": [50, 50, 100, 150, 250]
}
},
"fik": {
"er": [592, 92, 32, 13]
"gp": [12, 34, 116, 29]
}
}
getRootProperty(object, 250); //=> "r1n"
getRootProperty(object, 116); //=> "fik"
getRootProperty(object, 111); //=> "r1n"
getRootProperty(object, 999); //=> null
return null if the value isn't found. */

function getRootProperty(obj, number) {
  for (let key of Object.keys(obj)) {
    if (Array.isArray(obj[key]) && obj[key].includes(number)) {
      return key;
    } else if (getRootProperty(obj[key], number)) {
      return key;
    }
  }

  return null;
}

let object1 = {
  "one": {
    "nest1": {
      "val1": [9, 34, 92, 100]
    }
  },
  "2f7": {
    "n1": [10, 92, 53, 71],
    "n2": [82, 34, 6, 19]
  }
}

console.log(getRootProperty(object1, 9));

let object2 = {
  "r1n": {
    "mkg": {
      "zma": [21, 45, 66, 111],
      "mii": {
        "ltf": [2, 5, 3, 9, 21]
      },
      "fv": [1, 3, 6, 9]
    },
    "rmk": {
      "amr": [50, 50, 100, 150, 250]
    }
  },
  "fik": {
    "er": [592, 92, 32, 13],
    "gp": [12, 34, 116, 29]
  }
}

console.log(getRootProperty(object2, 250));
console.log(getRootProperty(object2, 116));
console.log(getRootProperty(object2, 111));
console.log(getRootProperty(object2, 999));
