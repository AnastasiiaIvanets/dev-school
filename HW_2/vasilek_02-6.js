/* Дано масив рядків, виконайте функцію, обчисливши загальний периметр усіх островів. 
Кожна ділянка землі буде позначена літерою «X», а водні поля — літерою «O». 
Вважайте кожну плитку ідеальною ділянкою землі розміром 1 x 1. 
Деякі приклади для кращої візуалізації:
['XOOXO',
"XOOXO",
"OOOXO",
"XXOXO",
'OXOOO']
який представляє:
має повернути: "Загальний периметр землі: 24".
Наступний вхід:
['XOOO',
"XOXO",
"XOXO",
"OOXX",
'OOOO']
який представляє:
має повернути: "Загальний периметр землі: 18" */

function perimetrOfIslands(islands) {
  let perimeter = 0;

  for (let j = 0; j < islands.length; j++) {
    for (let i = 0; i < islands[j].length; i++) {
      if (islands[j][i] === "X") {
        perimeter += 4;
        if (j + 1 !== islands.length) {
          if (islands[j + 1][i] === "X") {
            perimeter -= 2;
          }
        }

        while (islands[j][i + 1] === "X") {
          perimeter += 2;

          if (j + 1 !== islands.length) {
            if (islands[j + 1][i + 1] === "X") {
              perimeter -= 2;
            }
          }

          i++;
        }

      }
    }
  }

  return `Total land perimeter: ${perimeter}`;
}

console.log(perimetrOfIslands(['XOOXO',
  "XOOXO",
  "OOOXO",
  "XXOXO",
  'OXOOO']));
console.log(perimetrOfIslands(['XOOO',
  "XOXO",
  "XOXO",
  "OOXX",
  'OOOO']));
