/**
 * https://www.jianshu.com/p/70c11dc8ec98
 */
class HashTable {
  constructor() {
    this.storage = []
    this.count = 0
    this.limit = 8
  }
  isPrime(num) {
    var temp = parseInt(Math.sqrt(num))
    for (var i = 2; i <= temp; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true
  }
  getPrime(num) {
    while (!isPrime(num)) {
      num++
    }
    return num
  }
  hashFunc(str, max) {
    var hashCode = 0
    for (var i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    hashCode = hashCode % max
    return hashCode
  }
  put(key, value) {
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
  get(key) {
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
  remove(key) {
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
  isEmpty() {
    return this.count == 0
  }
  size() {
    return this.count
  }
  resize(newLimit) {
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

