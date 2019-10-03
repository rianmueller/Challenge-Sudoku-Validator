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

  // for a given num, the puzzle will have an array of (num) arrays, each of which will contain (num) elements
  // must verify that each array has exactly 1 integer from 1-num

  console.log("GRID TO VALIDATE");
  console.log(this.sudoku);

  // return [
  //   [5,3,4, 6,7,8, 9,1,2],
  //   [6,7,2, 1,9,5, 3,4,8],
  //   [1,9,8, 3,4,2, 5,6,7],

  //   [8,5,9, 7,6,1, 4,2,3],
  //   [4,2,6, 8,5,3, 7,9,1],
  //   [7,1,3, 9,2,4, 8,5,6],

  //   [9,6,1, 5,3,7, 2,8,4],
  //   [2,8,7, 4,1,9, 6,3,5],
  //   [3,4,5, 2,8,6, 1,7,9]
  // ];

  const validator = [];
  for (let x = 1; x < num + 1; x++) {
    validator.push(x);
  }
  console.log("VALIDATOR ARRAY");
  console.log(validator);
  // validator = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]

  // check horizontal
  for (let i = 0; i < num; i++) {
    let array = this.sudoku[i];
    console.log("ROW " + i + " TO VALIDATE");
    console.log(array);

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
    console.log("COLUMN " + i + " TO VALIDATE");
    console.log(array);

    for (let x = 0; x < num; x++) {
      if (array.indexOf(validator[x]) === -1) {
        return false;
      }
    }
  }

  // must verify that, across arrays, each array position (e.g. the collection of all values of array[0]) has exactly 1 integer from 1-num
  // must verify that each sudoku square (subsections of several arrays) has exactly 1 integer from 1-num
  // - must first identify those subsections for a given value of (num)
  // return boolean true or false
  return true;
};
