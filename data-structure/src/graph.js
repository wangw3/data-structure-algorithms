class Graph {
  constructor() {
    this.vertexes = [];
    this.adjList = new Dictionay();
  }
  addVertex(v) {
    this.vertexes.push(v);
    this.adjList.set(v, []);
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  bfs(v, handler) {
    var color = this.initializeColor()
    var queue = new Queue()
    queue.enqueue(v)
    while (!queue.isEmpty()) {
      var qv = queue.dequeue()
      var qAdj = this.adjList.get(qv)
      color[qv] = "gray"
      for (var i = 0; i < qAdj.length; i++) {
        var a = qAdj[i]
        if (color[a] === "white") {
          color[a] = "gray"
          queue.enqueue(a)
        }
      }
      color[qv] = "black"
      if (handler) {
        handler(qv)
      }
    }
  }

  dfs(handler) {
    var color = this.initializeColor()

    for (var i = 0; i < this.vertexes.length; i++) {
      if (color[this.vertexes[i]] === "white") {
        this.dfsVisit(this.vertexes[i], color, handler)
      }
    }
  }
  dfsVisit(u, color, handler) {
    color[u] = "gray"
    if (handler) {
      handler(u)
    }
    var uAdj = this.adjList.get(u)
    for (var i = 0; i < uAdj.length; i++) {
      var w = uAdj[i]
      if (color[w] === "white") {
        this.dfsVisit(w, color, handler)
      }
    }
    color[u] = "black"
  }

}

