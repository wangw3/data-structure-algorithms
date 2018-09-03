/**
 * https://www.jianshu.com/p/70c11dc8ec98
 */
function HashTable() {

  this.storage = []
  this.count = 0
  this.limit = 8

  HashTable.prototype.isPrime = function (num) {
    var temp = parseInt(Math.sqrt(num))
    for (var i = 2; i <= temp; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true
  }

  HashTable.prototype.getPrime = function (num) {
    while (!isPrime(num)) {
      num++
    }
    return num
  }

  HashTable.prototype.hashFunc = function (str, max) {
    var hashCode = 0
    for (var i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    hashCode = hashCode % max
    return hashCode
  }

  HashTable.prototype.put = function (key, value) {
    var index = this.hashFunc(key, this.limit)
    var bucket = this.storage[index]
    if (bucket === undefined) {
      bucket = []
      this.storage[index] = bucket
    }
    var override = false
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value
        override = true
      }
    }
    if (!override) {
      bucket.push([key, value])
      this.count++

      if (this.count > this.limit * 0.75) {
        var primeNum = this.getPrime(this.limit * 2)
        this.resize(primeNum)
      }
    }
  }

  HashTable.prototype.get = function (key) {
    var index = this.hashFunc(key, this.limit)
    var bucket = this.storage[index]
    if (bucket == null) {
      return null
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    return null
  }

  HashTable.prototype.remove = function (key) {
    var index = this.hashFunc(key, this.limit)
    var bucket = this.storage[index]
    if (bucket == null) {
      return null
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count--
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          var primeNum = this.getPrime(Math.floor(this.limit / 2))
          this.resize(primeNum)
        }
      }
      return tuple[1]
    }
    return null
  }
  HashTable.prototype.isEmpty = function () {
    return this.count == 0
  }
  HashTable.prototype.size = function () {
    return this.count
  }
  HashTable.prototype.resize = function (newLimit) {
    var oldStorage = this.storage
    this.limit = newLimit
    this.count = 0
    this.storage = []
    oldStorage.forEach(function (bucket) {
      if (bucket == null) {
        return
      }
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    }).bind(this)
  }
}

