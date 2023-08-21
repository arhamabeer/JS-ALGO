
// let a = `bbcacad`
let a = `bdea`
let str = a.split("")
let ch = []

for(let i = 0 ; i< str.length ; i++){
    if(ch.includes(i)) continue;
    for(let j = i; j < str.length ; j++){
        let c1 = str[i];
        let c2 = str[j]
        if(str[i] > str[j]){
            for(let k = i ;k < str.length ; k++){
                if(str[k] === c2){
                    str[k] = c1;
                    ch.push(k)
                    continue;
                }
                if(str[k] === c1){
                    str[k] = c2;
                    ch.push(k)
                    continue;
                }
            }
        }
    }
}
let final = str.toString().replace(/,/g,"");
    console.log("result => ",final);
