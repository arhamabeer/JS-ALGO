const arr = [3, -4, 5, 4, -1, 7, -8];

const printMaxSumOfSubArrayElements = _arr => {
  let maxSum = 0
  
  for (let start = 0; start < _arr.length; start++) {
    let sum = 0
    for(let end = start; end < _arr.length; end++){
        sum += _arr[end]
        maxSum = Math.max(sum,maxSum)
    }
  }
  return maxSum;
};

const result = printMaxSumOfSubArrayElements(arr);
console.log('hello', result);
