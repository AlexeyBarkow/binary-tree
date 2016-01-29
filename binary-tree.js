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
			if (!elem.right) {
				if(!elem.left) {
					return null;
				} else {
					return elem.left;
				}
			} else {
				replacement = elem.right;
				while(replacement.left) {
					replacement = replacement.left;
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
		if (replace == null || replace == current.left) {
			//console.log("null or right replacemet");
			if (!parent) {
				this.root = replace;
			} else {
				if (parent.right == current) {
					parent.right = replace;
				} else {
					parent.left = replace;
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
				if (parent.right == current) {
					parent.right = replace;
				} else {
					parent.left = replace;
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
/*
var bt = new BinaryTree();
bt.insert(13);
bt.insert(10);
bt.insert(8);
bt.insert(18);
bt.insert(12);
bt.insert(11);
bt.insert(15);
bt.insert(6);
bt.insert(20);
bt.insert(7);
bt.insert(4);
bt.insert(7.5);
console.log(bt.size());
bt.remove(15);
console.log(bt.size());
bt.remove(8);
console.log(bt.size());
console.log(bt);
*/
//console.log(binary);