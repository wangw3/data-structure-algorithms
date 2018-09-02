/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const sArr = [];
    const obj = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    
    const arr = s.split('');
    
    arr.forEach((char)=> {
        obj[char] && (obj[char] === sArr[sArr.length-1]) ?
            sArr.pop():
            sArr.push(char);

    });
    return sArr.length === 0;
};

// var isValid = function(s) {
//     let map = {};
//     let hash = {};
//     let stack = [];
    
//     map['}']='{';
//     map[']']='[';
//     map[')']='(';
    
//     hash['{']=0;
//     hash['[']=0;
//     hash['(']=0;
    
    
//     for(let i=0;i<s.length;i++){
        
//         if (s[i] in hash){
//             stack.push(s[i]);
//         }else {
//             let key = s[i];
//             //console.log(s[i] in map);
//             if (key in map && stack.pop() == map[key]){
//                 // good
//             }else{
//                 return false;
//             }
//         }
//     }
    
//     if (stack.length>0) {
//         return false;
//     }else{
//         return true;
//     }
// };