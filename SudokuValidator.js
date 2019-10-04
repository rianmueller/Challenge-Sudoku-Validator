/*  SudokuValidator(sudoku)
 *
 *  @param sudoku                       a multidimensional array containing the sudoku puzzle
 *
 *  @public property sudoku             the sudoku grid
 *
 *  @public method validate(num)        num is the perfect squared value of an integer
                                        for example: 9(result of 3^3) & 4 (2^2).
 */

exports.SudokuValidator = SudokuValidator;

function SudokuValidator(sudoku) {
  this.sudoku = sudoku;
}

SudokuValidator.prototype.validate = function(num) {
  // Do work here

  // create an array to compare rows, columns, sub-grids against
  const validator = [];
  for (let x = 0; x < num; x++) {
    validator.push(x + 1);
  }

  // check horizontal
  for (let i = 0; i < num; i++) {
    let array = this.sudoku[i];

    for (let x = 0; x < num; x++) {
      if (array.indexOf(validator[x]) === -1) {
        return false;
      }
    }
  }

  // check vertical
  for (let i = 0; i < num; i++) {
    let array = [];
    for (let j = 0; j < num; j++) {
      array.push(this.sudoku[j][i]);
    }

    for (let x = 0; x < num; x++) {
      if (array.indexOf(validator[x]) === -1) {
        return false;
      }
    }
  }

  // check sub-grids

  // num = 9

  // i = sub-grid index
  // j = row value
  // k = column value

  // grid 0
  // result = [[0][0], [0][1], [0][2], [1][0], [1][1], [1][2], [2][0], [2][1], [2][2]]
  // j = 0-2, k = 0-2

  // grid 1
  // result = [[0][3], [0][4], [0][5], [1][3], [1][4], [1][5], [2][3], [2][4], [2][5]]
  // j = 0-2, k = 3-5

  // grid 2
  // result = [[0][6], [0][7], [0][8], [1][6], [1][7], [1][8], [2][6], [2][7], [2][8]]
  // j = 0-2, k = 6-8

  // grid 3
  // result = [[3][0], [3][1], [3][2], [4][0], [4][1], [4][2], [5][0], [5][1], [5][2]]
  // j = 3-5, k = 0-2

  // grid 4
  // result = [[3][3], [3][4], [3][5], [4][3], [4][4], [4][5], [5][3], [5][4], [5][5]]
  // j = 3-5, k = 3-5

  // grid 5
  // result = [[3][6], [3][7], [3][8], [4][6], [4][7], [4][8], [5][6], [5][7], [5][8]]
  // j = 3-5, k = 6-8

  // grid 6
  // result = [[6][0], [6][1], [6][2], [7][0], [7][1], [7][2], [8][0], [8][1], [8][2]]
  // j = 6-8, k = 0-2

  // grid 7
  // result = [[6][3], [6][4], [6][5], [7][3], [7][4], [7][5], [8][3], [8][4], [8][5]]
  // j = 6-8, k = 3-5

  // grid 8
  // result = [[6][6], [6][7], [6][8], [7][6], [7][7], [7][8], [8][6], [8][7], [8][8]]
  // j = 6-8, k = 6-8

  // if "i = j + k", push the [j][k] value

  for (let grid = 0; grid < num; grid++) {
    let array = [];
    for (let row = 0; row < num; row++) {
      for (let col = 0; col < num; col++) {
        if (
          Math.floor(row / Math.sqrt(num)) * Math.sqrt(num) +
            Math.floor(col / Math.sqrt(num)) ===
          grid
        ) {
          array.push(this.sudoku[row][col]);
        }
      }
    }

    for (let x = 0; x < num; x++) {
      if (array.indexOf(validator[x]) === -1) {
        return false;
      }
    }
  }

  return true;
};
