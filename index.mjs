import { stat } from 'fs/promises';
import { chdir, cwd } from 'node:process';
import { homedir } from 'os';
import readline from "readline";
import parseArgs from './src/cli/args.js';
import list from './src/fs/list.js';
import read from './src/streams/read.js';
import create from './src/fs/create.js';
import createDir from './src/fs/createDir.js';
import rename from './src/fs/rename.js';
import copyFile from './src/streams/copyFile.js';
import remove from "./src/fs/delete.js";

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

const operate = (callback, arg) => {
  if (arg) {
    callback(arg);
  } else {
    console.error(`Invalid input`);
  }
}

const operateWithTwoArgs = async (callback, oldPath, newPath, isNewPathExist = false) => {
  if (oldPath && newPath) {
    await stat(oldPath);

    if (isNewPathExist) {
      await stat(newPath)
        .catch((error) => {
          if (error.code === 'ENOENT') {
            throw Error(error);
          }
        });
    } else {
      await stat(newPath).then(() => {
        throw Error('Operation failed');
      }, (error) => {
        if (error.code !== 'ENOENT') {
          throw Error(error);
        }
      });
    }

    callback(oldPath, newPath);
  } else {
    console.error(`Invalid input`);
  }
}

rl.on('line',async (input) => {
  const inputArgs = input.trim().split(' ');
  try {
    switch (inputArgs[0]) {
      case '.exit': rl.close(); break;
      case 'up': chdir('..'); break;
      case 'cd': operate(chdir, inputArgs[1]); break;
      case 'ls': await list(cwd()); break;
      case 'cat': await operate(read, inputArgs[1]); break;
      case 'add':await operate(create, inputArgs[1]); break;
      case 'mkdir': await operate(createDir, inputArgs[1]); break;
      case 'rn': await operateWithTwoArgs(rename, inputArgs[1], inputArgs[2]); break;
      case 'cp': await operateWithTwoArgs(copyFile, inputArgs[1], inputArgs[2], true); break;
      case 'mv': break;
      case 'rm': await operate(remove, inputArgs[1]); break;
      case 'os': break;
      case 'hash': break;
      case 'compress': break;
      case 'decompress': break;
      default: console.log(`Invalid input`);
    }
  } catch (error) {
    console.error(`Operation failed`);
  }
  printCurrentDirName();
})

rl.on('close', () => {
  console.log(`\nThank you for using File Manager, ${userName}, goodbye!`);
})

process.on("SIGINT", () => {
  rl.close()
});
