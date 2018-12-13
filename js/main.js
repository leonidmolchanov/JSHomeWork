// Да возможно можно написать более красиво через методы, попытался решить как можно легче и задействовать меньше кода
'use strict';
function magic() {
    let string = 'aabbbaccaa';
    let x=1;
    let result="";
    for (let i = 0; i < string.length; i++) {
        if(string[i+1]===string[i]){
            x++;
        }
        else if(string[i+1]==undefined){
            result+=x+string[i];
        }
        else{
            result+=x+string[i];
            x=1;
        }
    }
    document.getElementById('display').innerText= result;
}

