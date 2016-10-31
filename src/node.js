var Connection = require('./connection')

class Node {
	constructor (title, text) {
		this.title = title;
		this.text = text;
		this.connections = [];
		this.conditions = {};
	}
	connect(node, condition) {
		if (this.conditions[condition]) throw new Error(`There is already a connection with the condition ${condition}.`);
		var connection = new Connection(node, condition);
		this.connections.push(connection);
		this.conditions[condition] = connection;
	}
}

module.exports = Node
