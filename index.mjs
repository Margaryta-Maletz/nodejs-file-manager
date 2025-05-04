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

const operate = (callback, ...args) => {
  if (args[0]) {
    callback(...args);
  } else {
    console.log(`Invalid input`);
  }
}

rl.on('line',(input) => {
  const inputArgs = input.trim().split(' ');
  try {
    switch (inputArgs[0]) {
      case '.exit': rl.close(); break;
      case 'up': chdir('..'); break;
      case 'cd': operate(chdir, inputArgs[1]); break;
      case 'ls': break;
      case 'cat': break;
      case 'add': break;
      case 'mkdir': break;
      case 'rn': break;
      case 'cp': break;
      case 'mv': break;
      case 'rm': break;
      case 'os': break;
      case 'hash': break;
      case 'compress': break;
      case 'decompress': break;
      default: console.log(`Invalid input`);
    }
  } catch (error) {
    console.log(`Operation failed`);
  }
  printCurrentDirName();
})

rl.on('close', () => {
  console.log(`\nThank you for using File Manager, ${userName}, goodbye!`);
})

process.on("SIGINT", () => {
  rl.close()
});
