// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

var searchInsert = function(nums, target) {
  let _ind = null;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > target) {
      _ind = i
      break;
      };
    if(nums[i] === target){
      _ind = i
      break; 
    }
  }  
  return _ind === null ? nums.length : _ind
};
