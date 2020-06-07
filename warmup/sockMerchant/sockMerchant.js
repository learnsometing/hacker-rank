function sockMerchant(n, ar){
  const reducer = (acc, curr) => {
    if (!acc[curr]) acc[curr] = 1;
    else {
      acc[curr] += 1
    }
    return acc;
  }

  const colorCounts = ar.reduce(reducer, {});
  return Object.values(colorCounts).reduce((acc, curr) => acc += Math.floor(curr / 2), 0);

}

module.exports = sockMerchant;