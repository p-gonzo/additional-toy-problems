var colorCount = function(colorMatrix) {
  
  var visitedHash = {};
  
  var largestSoFar = {
    color: undefined,
    count: 0,
  };
  
  var totalOfColor = {
    color: undefined,
    count: 0,
  };
  
  var exploreColor = function(row, col) {
    
    var currentColor = colorMatrix[row][col];
    totalOfColor.count ++;
    totalOfColor.color = currentColor;
    
    visitedHash[String(row)+String(col)] = true;
    
    //look up
    if(row - 1 >= 0 && colorMatrix[row - 1][col] === currentColor && visitedHash[String(row - 1)+String(col)] === undefined) {
      exploreColor(row - 1, col)
    }
    //look down
    if(row + 1 <= colorMatrix.length -1 && colorMatrix[row + 1][col] === currentColor && visitedHash[String(row + 1)+String(col)] === undefined) {
      exploreColor(row + 1, col);
    }
    //look left
    if(col - 1 >= 0 && colorMatrix[row][col - 1] === currentColor && visitedHash[String(row)+String(col - 1)] === undefined) {
      exploreColor(row, col - 1);
    }
    //look right
    if(col + 1 <= colorMatrix[0].length - 1 && colorMatrix[row][col + 1] === currentColor && visitedHash[String(row)+String(col + 1)] === undefined) {
      exploreColor(row, col + 1);
    }

  }

  for (var row = 0; row < colorMatrix.length; row ++) {
    for (var col = 0; col < colorMatrix[row].length; col ++) {
      if (visitedHash[String(row)+String(col)] === undefined) {
        exploreColor(row, col);
        if (totalOfColor.count > largestSoFar.count) {
          largestSoFar.count = totalOfColor.count;
          largestSoFar.color = totalOfColor.color;
        }
        totalOfColor.count = 0;
      }
    }
  }

  return largestSoFar;
}

var matrix1 =   [['g','g','r','r','r'],
                ['g','g','r','r','r'],
                ['o','g','o','o','r'],
                ['o','o','o','r','r'],
                ['o','o','o','r','r']]

var matrix2 =   [['g','g','g','g','g'],
                ['g','o','g','r','r'],
                ['o','o','o','o','r'],
                ['o','o','o','r','r'],
                ['o','o','o','r','r']]