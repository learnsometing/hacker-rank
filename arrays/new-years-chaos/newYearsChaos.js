function minimumBribes(q) {
  var minBribes = 0;
  for (let i = q.length - 1; i >= 0; i--){
    const numBribes = q[i] - (i + 1);
    if (numBribes > 2){
      console.log('Too chaotic');
      return 'Too chaotic';
    }
    for (let j = 0; j < i; j++){
        if (q[j] > q[i]) minBribes++;
    }
  }

  console.log(minBribes);
  return minBribes;
}

module.exports = minimumBribes;