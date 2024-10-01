const arr = [2, 2, 1, 1, 1, 1, 2];

const majorityElement = (_arr) => {
    let freq = 0
    let ans = 0;
    
    for(let i=0; i < _arr.length; i++){
        if(freq === 0) ans = _arr[i];
        if(ans === _arr[i]) freq++
        else freq--
    }
    
    return ans
};

const result = majorityElement(arr);
console.log('hello', result);
