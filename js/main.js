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

// ========
// 1) Напишите функцию deepEqual(obj1, obj2) => deepEqual({a:1, b:{c:2}},{a:1, b:{c:2}}) //true
// deepEqual({a:1, b:{c:2}, d:1},{a:1, b:{c:2}}) //false
// Только собственные ключи
// 2) Напишите функцию styleToObj(str)
// let str = `position:fixed;border:1px solid red;color: red;`  => {position: 'fixed',border: '1px solid red',color: 'red' }

function deepEqual(obj1, obj2) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for (let key in obj1) {
        if (obj1[key] === obj2[key]) {
            continue;
        }
        else{
            if (typeof obj1[key] === 'object') {
                for (let key2 in obj1[key]) {
                    if (obj1[key][key2] !== obj2[key][key2]) {
                        return false;
                    }
                }
            }
            else{
                return false;
            }
        }

    }
    return true;
}
let obj1={a:1, b:{c:2}};
let obj2 = {a:1, b:{c:2}};

console.log(deepEqual(obj1, obj2));
let str = `position:fixed;border:1px solid red;color:red;`
function styleToObj(str) {
str = str.split(';');
let obj={};
str.forEach( function (item) {
    item = item.split(':');
    if(item[1]) {
        obj[item[0]] = item[1];
    }
});
}

styleToObj(str);