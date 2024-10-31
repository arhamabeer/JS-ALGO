const arr = [1,8,6,2,5,4,8,3,7];
//area = widht x height
// w = index, h = value[index]

const mostWater = (_arr)=>{
    let answerWater = 0
    let leftPointer = 0
    let rightPointer = _arr.length-1
    
    while(leftPointer < rightPointer){
        let w = rightPointer - leftPointer;
        let h = Math.min(_arr[leftPointer], _arr[rightPointer])
        
        let currWater = w*h;
        console.log(currWater)
        answerWater = Math.max(answerWater,currWater)
        
        _arr[leftPointer] > _arr[rightPointer] ? rightPointer-- : leftPointer++;
    }
    return answerWater;
};
const result = mostWater(arr);
console.log('hello', result);
