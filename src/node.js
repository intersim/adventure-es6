var Connection = require('./connection')

// For more on ES6 classes: http://www.benmvp.com/learning-es6-classes/
// For more on ES6 template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

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
