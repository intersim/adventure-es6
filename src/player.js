'use strict'

var inquirer = require('inquirer')

var game = require('../example/example.game')

/**

This file has no test specs. It might be a tricky one. You need to look at
the docs for the inquirer npm package, and see if you can figure out how
to make the game run!

If you're running out of time, check out our solution to the problem:

https://gist.github.com/joedotjs/ae54507f758988222ce1c80fc3ba83e2

**/

var play = function(node) {

  // Base case
  if (!node.connections.length) {
    // Your code here
    console.log(node.text);
    return Promise.resolve() // Don't worry about this, we will look more into Promise later on
  }

  // Recursive case
  return inquirer.prompt([{
    type: 'list',
    name: 'node',
    message: node.text,
    choices: node.connections
  }])
  .then(answer => play(answer.node));
}

play(game.startingPoint)
.then(function() {
  console.log('Game over.') // This will run after the Promise.resolve() method is called
})
