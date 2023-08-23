let haystack = `hello`
let needle = `ll`
    let match = ''
    let match_arr = []
    for(let x = 0; x < haystack.length ; x++){
      for(let i = 0 ; i < needle.length; i++){
        match += haystack[x+i]
      } 
      match === needle && match_arr.push(x)
      match = ''
    }
    return match_arr.length > 0 ? match_arr[0] : -1;
};
