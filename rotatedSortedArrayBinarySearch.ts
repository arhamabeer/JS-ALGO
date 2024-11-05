const arr = [79,82,95,103,110,1,5,13,34,40,45,64];
const binarySearch = (_arr, target)=>{
    let st = 0;
    let end =_arr.length - 1
    while(st <= end){
        let mid =  Math.floor(st + (end - st) / 2);

        if(_arr[mid] === target) return mid
        if(_arr[st] <= _arr[mid]){     // left sorted
            if(_arr[st] <= target && _arr[mid] >= target) end = mid - 1
            else st = mid + 1
        }

        else {               // right sorted
            if(_arr[mid] <= target && target <= _arr[end]) st = mid + 1
            else end = mid - 1
        }
    }
    return -1
}
// const result = binarySearch(arr, 45);
console.log('hello', binarySearch(arr, 79));
console.log('hello', binarySearch(arr, 82));
console.log('hello', binarySearch(arr, 95));
console.log('hello', binarySearch(arr, 103));
console.log('hello', binarySearch(arr, 110));
console.log('hello', binarySearch(arr, 1));
console.log('hello', binarySearch(arr, 5));
console.log('hello', binarySearch(arr, 13));
console.log('hello', binarySearch(arr, 34));
console.log('hello', binarySearch(arr, 40));
console.log('hello', binarySearch(arr, 45));
