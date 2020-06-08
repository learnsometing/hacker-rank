function minimumSwaps(arr) {
  var minSwaps = 0;
  do {
    var swapped = false;
    for (let i = 0; i < arr.length; i++){
      let el = arr[i];
      if (el !== i + 1){
        let temp = arr[el - 1];
        arr[el - 1] = el;
        arr[i] = temp;
        swapped = true;
        minSwaps++;
      }
    }
  } while(swapped);
  return minSwaps;
}

module.exports = minimumSwaps;