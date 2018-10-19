//forward
//clockwise
//counterclockwise
//['forward', 'clockwise', 'counterClockwise']

var calculateRobotPosition = (array) => {

  var endPosition = {x: 0, y: 0};

  var directions = ['north', 'east', 'south', 'west'];
  var directionIndex = 0;

  var turnClockwise = () => {
    if (directionIndex < 3) {
      directionIndex ++;
    } else {
      directionIndex = 0;
    }
  }

  var turnCounterClockwise = () => {
    if (directionIndex < 0) {
      directionIndex --;
    } else {
      directionIndex = 3;
    }
  }

  var moveForward = () => {
    var direction = directions[directionIndex];
    if (direction === 'north') {
      endPosition.y ++;
    } else if (direction === 'east') {
      endPosition.x ++;
    } else if (direction === 'south') {
      endPosition.y --;
    } else if (direction === 'west') {
      endPosition.x --;
    }
  }

  array.forEach((instruction) => {
    if (instruction === 'forward') {
      moveForward()
    } else if (instruction === 'clockwise') {
      turnClockwise()
    } else if (instruction === 'counterClockwise') {
      turnCounterClockwise();
    }
  })

  var totalDistanceFromOrigin = Math.sqrt(Math.abs(endPosition.x) ** 2 + Math.abs(endPosition.y) ** 2);
  var positionRelativeToOrigin;
  
  if (endPosition.y > 0 && endPosition.x === 0) {
    positionRelativeToOrigin = 'north';
  } else if (endPosition.y < 0 && endPosition.x === 0) {
    positionRelativeToOrigin = 'south';
  } else if (endPosition.y === 0 && endPosition.x > 0) {
    positionRelativeToOrigin = 'east';
  } else if (endPosition.y === 0 && endPosition.x < 0) {
    positionRelativeToOrigin = 'west';
  } else if (endPosition.y > 0 && endPosition.x > 0) {
    positionRelativeToOrigin = 'northeast';
  } else if (endPosition.y > 0 && endPosition.x < 0) {
    positionRelativeToOrigin = 'northwest';
  } else if (endPosition.y < 0 && endPosition.x > 0) {
    positionRelativeToOrigin = 'southeast';
  } else if (endPosition.y < 0 && endPosition.x < 0) {
    positionRelativeToOrigin = 'southwest';
  }
  return `The robot is ${totalDistanceFromOrigin.toFixed(2)} feet ${positionRelativeToOrigin} of the origin`;
}