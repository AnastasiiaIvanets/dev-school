/*Створіть векторний об’єкт, який підтримує додавання, віднімання, скалярний добуток і норми. 
Так, наприклад:

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b); // повинен повернути новий Vector([4, 6, 8])
a.subtract(b); // має повернути новий Vector([-2, -2, -2])
a.dot(b); // має повернути 1*3 + 2*4 + 3*5 = 26
a.norm(); // має повернути sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c); // видає помилку

Якщо ви спробуєте додати, відняти або поставити крапкою два вектори різної довжини, 
ви повинні викинути помилку!

Також надайте:

a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, 
this is a __str__ method, so that str(a) == '(1,2,3)')
an equals method, щоб перевірити, що два вектори, які мають однакові компоненти, рівні

Примітка: тестові приклади використовуватимуть наданий користувачем equals method.*/

let Vector = function (components) {
  this.components = components;

  this.toString = function () {
    return "(" + components.toString() + ")";
  };

  this.equals = function (vector) {
    if (components.length === vector.components.length) {
      for (let i = 0; i < components.length; i++) {
        if (components[i] !== vector.components[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };

  this.add = function (vector) {
    if (components.length !== vector.components.length) {
      throw new Error;
    }

    let result = [];
    for (let i = 0; i < components.length; i++) {
      result.push(components[i] + vector.components[i]);
    }

    return new Vector(result);
  };

  this.subtract = function (vector) {
    if (components.length !== vector.components.length) {
      throw new Error;
    }

    let result = [];
    for (let i = 0; i < components.length; i++) {
      result.push(components[i] - vector.components[i]);
    }

    return new Vector(result);
  };

  this.dot = function (vector) {
    if (components.length !== vector.components.length) {
      throw new Error;
    }

    let result = 0;
    for (let i = 0; i < components.length; i++) {
      result += components[i] * vector.components[i];
    }

    return result;
  };

  this.norm = function () {
    let result = 0;
    for (let i = 0; i < components.length; i++) {
      result += components[i] ** 2;
    }

    return Math.sqrt(result);
  };
};

let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);
let c = new Vector([5, 6, 7, 8]);

console.log(a.add(b).toString()); // повинен повернути новий Vector([4, 6, 8])
console.log(a.subtract(b).toString()); // має повернути новий Vector([-2, -2, -2])
console.log(a.dot(b).toString()); // має повернути 1*3 + 2*4 + 3*5 = 26
console.log(a.norm().toString()); // має повернути sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
console.log(a.add(c).toString()); // видає помилку
