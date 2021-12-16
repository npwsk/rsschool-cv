# Nika Perfilova

## Contacts:

**E-mail:** [perfil.nika@gmail.com](mailto:perfil.nika@gmail.com)\
**Telegram:** [nika_perfilova](https://t.me/nika_perfilova)\
**Discord:** Nika Perfilova (@npwsk)\
**GitHub:** [npwsk](https://github.com/npwsk)

## About Me:

Developing user interfaces is my passion. I am currently learning and hope to be able to create good looking, user-friendly and fast interfaces soon. My goal is to start a career as a Front-End developer.

## Skills:

- HTML, CSS (SASS/SCSS, Bootstrap)
- JavaScript (React)
- NodeJS
- Webpack
- Git, SVN
- C++ (basic knowledge), Python(basic knowledge)

## Code Example:

```javascript
let rotateMatrix = (arr) => {
  const rowsCount = arr.length;
  const [firstRow] = arr;
  const columnsCount = firstRow.length;
  const rotatedMatrix = [...new Array(columnsCount)].map(() => []);
  for (let row = 0; row < columnsCount; row += 1) {
    for (let column = 0; column < rowsCount; column += 1) {
      rotatedMatrix[row][column] = arr[column][columnsCount - 1 - row];
    }
  }
  return rotatedMatrix;
};
```

## Experience:

- **Projects:**
  - [brain-games](https://github.com/bbngpw/frontend-project-lvl1): a set of five console games
  - [gendiff](https://github.com/bbngpw/frontend-project-lvl2): a console app for comparing two files (json, yaml)

## Education:

- 2019 - 2024: **Tomsk State University of Control Systems and Radioelectronics**, Applied Informatics in Economics
- 2021: **Online courses** at:
  - [Hexlet](https://ru.hexlet.io/u/bbngpw)
  - [HTML Academy](https://htmlacademy.ru/profile/id421001)

## English:

- Upper-intermediate/advanced (B2/C1)
