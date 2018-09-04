ArrayList.prototype.selectionSort = function () {
    var length = this.array.length

    for (var i = 0; i < length - 1; i++) {
        var min = i
        for (var j = min + 1; j < length; j++) {
            if (this.array[min] > this.array[j]) {
                min = j
            }
        }
        this.swap(min, i)
    }
}

ArrayList.prototype.swap = function (m, n) {
    var temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
}
