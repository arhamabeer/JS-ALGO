const arr = [5,15,22,1,14,65]


const reverseArray = (_arr,_target)=> {
    let rev = []
    for (let i = _arr.length -1 ; i >= 0 ; i--) {
        rev.push(_arr[i])
    }
    return rev
}



const result = reverseArray(arr)
console.log('hello', result)



//without using second array
var arr = [5,15,22,1,14,65]


const reverseArray = (_arr)=> {
    let indLength = _arr.length - 1 
    
    for (let i = 0 ; i < _arr.length /2 ; i++) {
        
        let temp = arr[i]
        arr[i] = _arr[indLength - i]
        _arr[indLength - i] = temp
        
        console.log('inner', arr[i],_arr[indLength - i])
    }
    console.log('arr', arr)
}
reverseArray(arr)
console.log('hello', arr)
