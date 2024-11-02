const arr = [1,5,13,34,40,45,64,79,82,95,103,110];

const binarySearch = (_arr, target)=>{
    let st = 0
    let end = _arr.length - 1
    
    while(st <= end){
        let mid = +(st + (end-st)/2).toFixed();
        if(_arr[mid] > target) end = mid - 1
        else if(_arr[mid] < target) st = mid + 1    
        else return mid
    }
    return -1
};
const result = binarySearch(arr, 95);
console.log('hello', result);
