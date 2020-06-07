function countValleys(n, s) {
  if ((n < 2 || n > 10e6) || s.match(/[^UD]/)) return 0;

  let elevation = 0;
  let valleys = 0;
  
  for(let i = 0; i < s.length; i++){
    const step = s.charAt(i);
    if (step == 'D') elevation--;
    else {
      elevation++;
      console.log(elevation)
      if (elevation == 0) valleys++;
    }

  }
  
  console.log(elevation)
  return valleys;
}

module.exports = countValleys;