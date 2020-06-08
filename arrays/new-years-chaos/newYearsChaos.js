function minimumBribes(q) {
  var minBribes = 0;
  do {
    var swapped = false;
    for (let i = 0; i < q.length; i++) {
      const numBribes = q[i] - (i + 1);
      if (numBribes > 2){
        console.log('Too chaotic');
        return 'Too chaotic';
      }

      if (q[i] > q[i+1]) {
        const temp = q[i];
        q[i] = q[i+1];
        q[i+1] = temp;
        swapped = true;
        minBribes++
      }
    }
  } while(swapped);

  console.log(minBribes);
  return minBribes;
}

module.exports = minimumBribes;