const str1 ='he borrowed the book from him many years ago and hasnt yet returned it You bite up because of your lower jaw Bill ran from the giraffe toward the dolphin The efficiency we have at removing trash has made creating trash more acceptable'

function reversed(){
    /* STR TO ARR*/
    let str = []
    let complete_word = '';
    for(let x = 0; x <= str1.length - 1; x++){
        let current = str1[x];
        if(current === ' '){
            str.push(complete_word);
            complete_word = '';
        }else{
            complete_word += current
        }
    }
    if(complete_word !== '') str.push(complete_word)
     /* STR TO ARR*/
    
     /* REVERSE ODD WORDS*/
    for(let i = 1; i < str.length; i = i+2){
        let _rev = '';
        for(let j = str[i].length - 1; j >= 0 ; j--){
            _rev = _rev + str[i][j] 
        }
        str[i] = _rev
    }
    /* REVERSE ODD WORDS*/
    
    /* ARR TO STR*/
    let reversed_str = str.toString().replace(/,/g,' ')
    console.log(reversed_str ,`-`, str1)
    /* ARR TO STR*/
}

reversed()
