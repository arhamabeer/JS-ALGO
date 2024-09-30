const arr = [5, 7, -12, 6, 15, -3, 10];

const printSubArrayElements = _arr => {
  for (let start = 0; start <= _arr.length; start++) {
    for(let end = start; end <= _arr.length; end++){
        for(let i = start; i < end; i++){
            console.log(_arr[i])
        }
        // console.log(" ")
    }
  }
  return null;
};

const result = printSubArrayElements(arr);
console.log('hello', result);
