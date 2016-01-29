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

	//left deletion
	remove(data) {
		var current = this.root,
			parent = null;
		function goLeftAndThenRight(elem){
			console.log(elem);
			var replacement;
			if (!elem.left) {
				if(!elem.right) {
					return null;
				} else {
					return elem.right;
				}
			} else {
				replacement = elem.left;
				while(replacement.right) {
					replacement = replacement.right;
				}
				return replacement;
			}
		}

		while (current) {
			if(current.data == data) {
				break;
			}
			if(data > current.data) {
				if(current.right) {
					parent = current;
					current = current.right;
				} else {
					return false;
				}
			} else {
				if(current.left) {
					parent = current;
					current = current.left
				} else { 
					return false;
				}
			}

		}
		var replace = goLeftAndThenRight(current);
	//	console.log(replace);
		if (replace == null || replace == current.right) {
			//console.log("null or right replacemet");
			if (!parent) {
				this.root = replace;
			} else {
				if (parent.left == current) {
					parent.left = replace;
				} else {
					parent.right = replace;
				}

			}
		} else {
			//console.log("here i am");
			this.remove(replace.data);
			replace.left = current.left;
			replace.right = current.right;
			if (!parent) {
				this.root = replace;
			} else {
				if (parent.left == current) {
					parent.left = replace;
				} else {
					parent.right = replace;
				}

			}
		}
		return true;
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
console.log(binary);
console.log(binary.size());
console.log(binary.contains(4));
binary.remove(2);
//console.log(binary);