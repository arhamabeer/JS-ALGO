// Kadane Algo

const arr = [3, -4, 5, 4, -1, 7, -8];

const printMaxSumSubArrayElements = _arr => {
  let maxSum = 0
  let sum = 0
  for (let i = 0; i < _arr.length; i++) {
    console.log('sum before ', sum)
    sum = sum + _arr[i]
    maxSum = Math.max(sum,maxSum)
    console.log('sum after', sum)
    if(sum < 0){
        sum = 0
    }
  }
  return maxSum;
};

const result = printMaxSumSubArrayElements(arr);
console.log('hello', result);
