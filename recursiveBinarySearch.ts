const arr = [1,5,13,34,40,45,64,79,82,95,103,110];
let st = 0
let end = arr.length - 1

const binarySearch = (st,end,_arr, target)=>{
    while(st <= end){
        let mid = +(st + (end-st)/2).toFixed();
        
        if(_arr[mid] > target) return binarySearch(st, mid - 1,_arr,target)
        else if(_arr[mid] < target) return binarySearch(mid +1, end ,_arr,target)    
        else return mid
    }
    return -1
};
const result = binarySearch(st,end,arr, 95);
console.log('hello', result);
