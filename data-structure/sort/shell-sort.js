ArrayList.prototype.shellSort = function () {
    var length = this.array.length
    var gap = Math.floor(length / 2)
    while (gap > 0) {
        for (var i = gap; i < length; i++) {
            var j = i
            var temp = this.array[i]
            while (j > gap - 1 && this.array[j - gap] > temp) {
                this.array[j] = this.array[j - gap]
                j -= gap
            }
            this.array[j] = temp
        }
        gap = Math.floor(gap / 2)
    }
}
