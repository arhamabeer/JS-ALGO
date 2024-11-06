const arr = [0,0,1,1,2,2,3,3,4,5,5,6,6,7,7,8,8,9,9,10,10,20,20];
// const arr = [2,2,3,3,4,4,5];

const binarySearch = (_arr)=>{
    let st = 0;
    let end =_arr.length - 1
    while(st <= end){
        let mid = Math.floor(st + (end-st)/2)

        if(_arr[mid] !== _arr[mid-1] && _arr[mid] !== _arr[mid+1]) return _arr[mid]
        
        if(mid % 2 != 0){ // both are odd sides
            if(_arr[mid] === _arr[mid-1]) st = mid + 1
            else end = mid - 1
        }
        else{       // both are even sides
            if(_arr[mid] === _arr[mid-1]) end = mid - 1
            else st = mid + 1
        }
    }
    return -1
}
console.log('hello', binarySearch(arr));
