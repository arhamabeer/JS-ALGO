const arr = [5, 15, 12, 6,15, 15, 5, 12];

const singleNumber = _arr => {
  let unique = null;
  for (let i = 0; i < _arr.length; i++) {
    let count = 0;
    for (let j = 0; j < _arr.length; j++) {
     if(_arr[i] === _arr[j]) {
      count++
      continue
      }
    }
    if(count === 1) unique = _arr[i]
  }
  return unique;
};

const result = singleNumber(arr);
console.log('hello', result);
