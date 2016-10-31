var Node = require('./node')

class Game {
	constructor() {
		this.nodes = {};
		this.startingPoint = null;
	}
	addNode(name, text) {
		if (this.nodes[name]) throw new Error(`There is already a node named "${name}" in this game.`);
		var newNode = new Node(name, text);
		if (!this.startingPoint) this.startingPoint = newNode;
		this.nodes[name] = newNode;
		return newNode;
	}
	getNode(name) {
		return this.nodes[name];
	}
	connect(name1, name2, condition) {
		if (!this.nodes[name1]) throw new Error(`There is no node named "${name1}"" in this game.`)
		var node1 = this.getNode(name1);
		var node2 = this.getNode(name2);
		node1.connect(node2, condition);
	}
}

module.exports = Game
