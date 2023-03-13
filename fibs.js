function fibs(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    if (i == 0 || i == 1) {
      result.push(i);
      continue;
    }
    let nextVal = result[result.length - 2] + result[result.length - 1];
    result.push(nextVal);
  }

  return result;
}

let cache = {};

function fibsRec(n) {
  if (n < 2) {
    return n;
  }

  if (cache[n]) return cache[n];

  let result = fibsRec(n - 1) + fibsRec(n - 2);
  cache[n] = result;
  return result;
}

console.log(fibsRec(10));
console.log(cache);
