'use strict';
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

	remove(data, parent){
		var current, cdata, replace, currParent;
		if(parent == null) {
			current = this.root;
		} else {
			if(parent.data < data) {
				current = parent.right;
			} 
			if(parent.data > data) {
				current = parent.left;
			}
		} 

		if(!current) {
			return;
		}
		if(current.data == data) {
			if(!current.left || !current.right) {
				if(parent) {
					this.cutTheLeaf(parent, current, current.left || current.right);
				} else {
					this.root = current.left || current.right;
				}
			} else {
				currParent = current;
				replace = current.right;
				while(replace.left) {
					currParent = replace;
					replace = replace.left;
				}
				this.cutTheLeaf(currParent, replace);
				current.data = replace.data;
			} 
		} else {
			this.remove(data, current);
		}
	}

	cutTheLeaf(parent, child, replacement) {
		if(parent.left == child) {
			parent.left = replacement;
		} 
		if(parent.right == child) {
			parent.right = replacement;
		}
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
