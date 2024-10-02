const arr = [2,2,3,5,3,3,3,3,4,5,5,3,4,5,4, 1, 1, 1, 1, 2];

const elementCount = (_arr) => {
    let count = {}
    
    for(let i=0; i < _arr.length; i++){
        if(Object.keys(count).includes(_arr[i].toString())){
            count[_arr[i]] = count[_arr[i]] + 1 
        }
        else{
            count[_arr[i]] = 1
        }
    }
    
    return count
};

const result = elementCount(arr);
console.log('hello', result);
