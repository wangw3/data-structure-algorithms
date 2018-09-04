ArrayList.prototype.insertionSort = function () {
    var length = this.array.length
    for (var i = 1; i < length; i++) {
        var j = i
        var temp = this.array[i]
        while (j > 0 && this.array[j - 1] > temp) {
            this.array[j] = this.array[j - 1]
            j--
        }
        this.array[j] = temp
    }
}

