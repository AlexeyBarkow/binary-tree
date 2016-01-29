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
		if(this.root == null) {
			this.root = newNode;
		} else {
			var current = this.root;
			while(true) {
				if(data > current.data) {
					if(current.right) {
						current = current.right;
					} else {
						current.right = newNode;
						break;
					}
				} else {
					if(current.left) {
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
		var current = this.root;
		while(current){
			if(current.data == data) {
				return true;
			}
			if(data > current.data) {
				current = current.right;
			} else {
				current = current.left;
			}
		}
		return false;
	}

	remove(data) {

	}

	size(current) {
		current = current || this.root;
		if(!current) {
			return 0;
		}
		var sum = 1;
		if(current.left) {
			sum += this.size(current.left);
		}
		if(current.right) {
			sum += this.size(current.right);
		}
		return sum;
	}

	isEmpty() {
		return this.root == null;
	}
}

var binary = new BinaryTree();
console.log(binary.isEmpty());
binary.insert(2);
binary.insert(3);
binary.insert(1);
console.log(binary);
console.log(binary.size());
console.log(binary.contains(2));
console.log(binary.contains(4));