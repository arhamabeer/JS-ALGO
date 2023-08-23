/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.
*/
var mySqrt = function(x) {
    let sqrt;
    let lessThan5 = x < 5;
    if(x === 0) return 0;
    else{
        for(let i = 0; i < lessThan5 ? x : x/2 ;i++){
            let _sqr = i*i;
            if(_sqr === x){
                sqrt = i;
                break;
            }
            if(_sqr > x){
                sqrt = i-1;
                break;
            }
        }
        return sqrt
    }
};
