'use strict';
//require("./node.js");
class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		if(!data){
			return;
		}
		var newNode = new Node(data);
		if(this.root == null){
			this.root = newNode;
		} else {
			var current = this.root;
			while(true){
				if(data > current.data){
					if(current.right){
						current = current.right;
					} else {
						current.right = newNode;
						break;
					}
				} else {
					if(current.left){
						current = current.left;
					} else {
						current.left = newNode;
						break;
					}
				}
			}
		}
	}

	contains(data) {

	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {
		return this.root == null;
	}
}

var binary = new BinaryTree();
console.log(binary.isEmpty());
binary.insert(2);
binary.insert(3);
console.log(binary);