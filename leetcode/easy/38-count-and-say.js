/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let obj = {
        1: '1'
    }
    for (let i = 2; i <= n; i++) {
        obj[i] = say(obj[i - 1]);
        console.log(i);
        console.log(obj[i]);
    }
    return obj[n];
};

const say = str => {
    const arr = str.split('');
    let res = [];
    let count = 0;
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === temp && i !== arr.length - 1) {
            count++;
        } else if (arr[i] !== temp && i !== arr.length - 1) {
            res.push(count);
            res.push(temp);
            temp = arr[i];
            count = 1;
        } else if (arr[i] !== temp && i === arr.length - 1) {
            res.push(count);
            res.push(temp);
            res.push(1);
            res.push(arr[i]);
        } else if (arr[i] === temp && i === arr.length - 1) {
            res.push(count + 1);
            res.push(arr[i]);
        }

    }
    return res.join('');
}

// var countAndSay = function(n) {
//     var oldStr = "1";

//     while (--n > 0) {
//         var curStr = "";
//         var oldChars = [];
//         for (var i = 0; i < oldStr.length; i++) {
//             var count = 1;
//             while (i + 1 < oldStr.length && (oldStr.charAt(i) === oldStr.charAt(i + 1))) {
//                 count++;
//                 i++;
//             }
//             oldChars.push(count + oldStr.charAt(i));
//         }
//         oldStr = oldChars.join("");
//     }

//     return oldStr;   
// };
