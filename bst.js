class Node {
    constructor(value){
        this.value = value
        this.leftChild = null
        this.rightChild = null
    }
}
class Tree{
    constructor(arrayObj){
        if(Array.isArray(arrayObj)){
            this.arrayObj = [...new Set(arrayObj.sort(function(a,b){return a-b}))]
            this.root = this.buildTree(this.arrayObj)
        }
    }

    buildTree(sortedArray){
        if (sortedArray.length === 0) return null
        let mid = Math.floor(sortedArray.length/ 2);
        const node = new Node(sortedArray[mid])
        const left = sortedArray.slice(0, mid-1)
        const right = sortedArray.slice(mid+1)
        node.leftChild = this.buildTree(left)
        node.rightChild = this.buildTree(right)

        return node;
    }
}




  let arry = [1,2,3,4,5,6,7,8,9]

  let t = new Tree(arry)

  var depthFirst = function (node) {
    if (node) {
        console.log(node.root)
        depthFirst(node.leftChild)
        depthFirst(node.rightChild)
    }
}

depthFirst(t);
