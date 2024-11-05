const arr = [0,3,5,9,12,13,20,22,23,36,40,45,85,99,87,67,52,37,31,24,13,2];
const binarySearch = (_arr)=>{
    let st = 1;
    let end =_arr.length - 2
    while(st <= end){
        let mid = Math.floor(st + (end-st)/2)
        if(_arr[mid-1] < _arr[mid] && _arr[mid] > _arr[mid+1]) return [mid, _arr[mid]]
        
        if(_arr[mid-1] < _arr[mid]) st = mid + 1
        
        else end = mid - 1
    }
    return -1
}
console.log('hello', binarySearch(arr));
