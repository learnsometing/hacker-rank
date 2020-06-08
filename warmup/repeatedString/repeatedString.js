function repeatedString(s, n){
  // calculate the number of times the matches will be repeated
  // and the fraction of s that remains afterwards
  const length = s.length;
  const numRepeats = Math.floor(n / length);
  const remainder = n % length;
  
  var numMatches = (s.split('a').length - 1) * numRepeats;
  for (let i = 0; i < remainder; i++){
    if (s.charAt(i) === 'a'){
      numMatches++
    }
  }
  return numMatches;
}

module.exports = repeatedString;