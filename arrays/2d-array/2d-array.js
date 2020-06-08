// Complete the hourglassSum function below.
function hourglassSum(arr) {
  var max = -63;
  for (let row = 0; row < 4; row++){
    for (let col = 0; col < 4; col++){
      let sum = arr[row][col] + arr[row][col + 1] + arr[row][col + 2];
      sum += arr[row + 1][col + 1];
      sum += arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];
      if (sum > max) max = sum;
    }
  }
  return max;
}

module.exports = hourglassSum;