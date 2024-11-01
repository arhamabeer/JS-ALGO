const arr = [1,2,3,4]; //ans = [24,12,8,6]

const productFunc = (_arr)=>{
    let ans = [1]
    for(let i=1;i<_arr.length;i++){
        ans[i] = ans[i-1] * _arr[i-1]
    }
    let suffix = 1
    for(let i=_arr.length-2;i>= 0;i--){
        suffix = _arr[i+1] * suffix
        ans[i]= ans[i] * suffix
    }
    
    return ans;
};
const result = productFunc(arr);
console.log('hello', result);
