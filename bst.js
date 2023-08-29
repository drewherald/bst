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
        let mid = Math.floor((sortedArray.length-1) / 2)
        const node = new Node(sortedArray[mid])
        const left = sortedArray.slice(0, mid)
        const right = sortedArray.slice(mid+1)
        node.leftChild = this.buildTree(left)
        node.rightChild = this.buildTree(right)

        return node;
    }

    insert(node, value){
        if(this.root==null){
            this.root = new Node(value)
            return root;
        }
        else if(value< node.value){
            if(node.leftChild!=null){
                node.leftChild = this.insert(node.leftChild, value)
            }else{
                console.log(`inserting ${value} before ${node.value}`)
                node.leftChild = new Node(value)
            }
        }
        else if(value> node.value){
            if(node.rightChild!=null){
                node.rightChild = this.insert(node.rightChild, value)
            }else{
                console.log(`inserting ${value} after ${node.value}`)
                node.rightChild = new Node(value)
            }
        }
        return node
    }
}




  let arry = [10,7,14,20,1,5]

  let t = new Tree(arry)

  /*var depthFirst = function (node) {
    if (node) {
        console.log(node.root)
        depthFirst(node.leftChild)
        depthFirst(node.rightChild)
    }
} 

depthFirst(t); */

    t.insert(t.root,40)


    console.log(t.root)
    console.log(t.root.leftChild)
    console.log(t.root.rightChild.rightChild)




