import parseArgs from './src/cli/args.js';
import readline from "readline";

const args = parseArgs();
const userName = args.username ?? 'Username';

console.log(`Welcome to the File Manager, ${userName}!`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line',(input) => {
  switch (input.trim()) {
    case '.exit': rl.close();
  }
})

rl.on('close', () => {
  console.log(`\nThank you for using File Manager, ${userName}, goodbye!`);
})

process.on("SIGINT", () => {
  rl.close()
});
