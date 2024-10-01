const arr = [2, 7, 11, 14, 15, 17, 28];

const pairSum = (_arr,target) => {
  let sum = 0
  let i = 0;
  let j = _arr.length - 1
  
  
  while(i < j) {
    sum = _arr[i] + _arr[j]
    if(sum > target) j--
    else if(target > sum) i++
    else
     return [i,j]
    
  }
};

const result = pairSum(arr,22);
console.log('hello', result);
