function quickSort(arr) {
    if (arr.length > 1) {
        var smallerArray = [];
        var greaterArray = [];
        var equalArray = [];
        p = Math.floor(Math.random() * arr.length);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < arr[p]) {
                smallerArray.push(arr[i]);
            }
            else if (arr[i] === arr[p]) {
                equalArray.push(arr[i]);
            }
            else {
                greaterArray.push(arr[i]);
            }
        }
        var left = quickSort(smallerArray);
        var right = quickSort(greaterArray);
        return left.concat(equalArray, right)
    }
    else if (arr.length === 1) {
        return arr;
    }
    else {
        return []
    }
}
