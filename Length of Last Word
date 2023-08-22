/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
*/

var lengthOfLastWord = function(s) {
    let last = ''
    let prev = ' '
    for(let i = s.length -1 ; i >= 0 ; i--){
      if(s[i] === ' ' && prev !== ' ') break;
      if(s[i] !== ' '){
        last += s[i];
        prev = s[i]
      } 
    }
    return last.length
};
