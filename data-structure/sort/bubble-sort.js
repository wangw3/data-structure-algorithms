ArrayList.prototype.bubbleSort = function () {
    var length = this.array.length
    for (var i = length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if (this.array[j] > this.array[j + 1]) {
                this.swap(j, j + 1)
            }
        }
    }
}

ArrayList.prototype.swap = function (m, n) {
    var temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
}
