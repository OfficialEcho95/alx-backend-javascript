process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Create a readable stream to read user input from the command line
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (process.stdin.isTTY) {
  // Listen for user input
  rl.on('line', (name) => {
    process.stdout.write(`Your name is: ${name}\n`);
  });

  // Listen for the 'close' event (when the user ends the program)
  rl.on('close', () => {
    process.stdout.write('This important software is now closing');
    process.exit(0); // Exit the program
  });
} else {
  rl.on('line', (name) => {
    process.stdout.write(`Your name is: ${name}\n`);
  });
  rl.on('close', () => {
    process.stdout.write('This important software is now closing');
    process.exit(0);
  });
}

module.exports = displayMessage;