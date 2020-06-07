function jumpingOnClouds(c){
  var count = 0;
  for (let i = 0; i < c.length - 1;){
    i += c[i + 2] ? 1 : 2;
    count++;
  }
  return count;
}

module.exports = jumpingOnClouds;