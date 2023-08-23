let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let fabonacci = 0
let prev = 0
let prev1 = 1
for(let i = 2; i < arr.length; i++){
    fabonacci = prev + prev1;
    prev = prev1;
    prev1 = fabonacci
    console.log(`each fabonacci result!, ${arr[i]}:${fabonacci}`);
}

console.log("final fabonacci total!", fabonacci);
