var romanToInt = function(s) {
    const obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let arr = s.split('');
    return arr.reduce((sum,value,index) => {
        let mul;
        if(obj[value] < obj[arr[index+1]]) {
            mul = -1;
        }
        else mul = 1;
        
        return sum + mul * obj[value];
    }, 0);
};

// const toDecimal = {
//     'I':1,
//     'V':5,
//     'X':10,
//     'L':50,
//     'C':100,
//     'D':500,
//     'M':1000
// }

// var romanToInt = function(s) {
//     let prevDec = -1;
//     let sum = 0;
//     for (let i = s.length-1; i >= 0; --i) {
//         let currDec = toDecimal[s.charAt(i)];
//         if (prevDec > currDec) {
//             sum -= currDec;
//         } else {
//             sum += currDec;
//         }
//         prevDec = currDec;
//     }
//     return sum;
// };
