var solveMiner =(map, miner, exit) => {

  var getPosString = (row, col) => {
    return String(row) + String(col);
  }

  var isValidMove = (row, col, breadcrumbs) => {
    return row >= 0 && row < map.length && col >= 0 && col < map[0].length && map[row][col] && breadcrumbs[getPosString(row, col)] === undefined;
  }
  
  var finalSolution;
  
  var exploreMine = (row, col, candidateSolution, breadcrumbs) => {
    //base case, we've reached the exit
    if (exit.y === row && exit.x === col) {
      if (finalSolution === undefined) {
        finalSolution = candidateSolution;
      } else {
        //if a candidate solution is shorter than the current final, update it
        if (finalSolution.length > candidateSolution.length) {
          finalSolution = candidateSolution;
        }
      }
      return;
    }

    //drop a breadcrumb signifying the miner has visited that spot
    var positionString = getPosString(row, col);
    breadcrumbs[positionString] = positionString;

    //if a move is valid, make it, update the candidate solution and pass forward the new breadcrumbs
    if (isValidMove(row - 1, col, breadcrumbs)) {
      exploreMine(row - 1, col, [...candidateSolution, 'up'], {...breadcrumbs})
    }
    if (isValidMove(row + 1, col, breadcrumbs)) {
      exploreMine(row + 1, col, [...candidateSolution, 'down'], {...breadcrumbs})
    }
    if (isValidMove(row, col - 1, breadcrumbs)) {
      exploreMine(row, col - 1, [...candidateSolution, 'left'], {...breadcrumbs})
    }
    if (isValidMove(row, col + 1, breadcrumbs)) {
      exploreMine(row, col + 1, [...candidateSolution, 'right'], {...breadcrumbs})
    }
  }
  
  exploreMine(miner.y, miner.x, [], {});
  
  return finalSolution;
}

var map = [[true, true, true, true],
          [false, false, false, true],
          [true, false, true, true],
          [true, false, true, true],
          [true, false, true, true],
          [true, true, true, true],
          [true, true, true, true]];