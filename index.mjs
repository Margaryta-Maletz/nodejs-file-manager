import parseArgs from './src/cli/args.js';

const args = parseArgs();
console.log(`Welcome to the File Manager, ${args.username ?? 'Username'}!`);

