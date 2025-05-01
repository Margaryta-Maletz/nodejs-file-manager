import parseArgs from './src/cli/args.js';
import {homedir} from 'os';
import readline from "readline";
import {chdir, cwd} from 'node:process';

const args = parseArgs();
const userName = args.username ?? 'Username';

chdir(homedir());
const printCurrentDirName = () => {
  console.log(`You are currently in ${cwd()}`);
}

console.log(`Welcome to the File Manager, ${userName}!`);
printCurrentDirName();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line',(input) => {
  try {
    switch (input.trim()) {
      case '.exit': rl.close(); break;
      default: console.log(`Invalid input`);
    }
  } catch (error) {
    console.log(`Operation failed`);
  }
})

rl.on('close', () => {
  console.log(`\nThank you for using File Manager, ${userName}, goodbye!`);
})

process.on("SIGINT", () => {
  rl.close()
});
