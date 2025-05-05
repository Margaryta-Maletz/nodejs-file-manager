import os from 'os';

const operationSystem = (option) => {
  switch (option) {
    case '--EOL':
      console.log(JSON.stringify(os.EOL));
      break;

    case '--cpus': {
      const cpus = os.cpus();
      console.log(`Total CPUs: ${cpus.length}`);

      cpus.forEach((cpu, i) => {
        const speedGHz = (cpu.speed / 1000).toFixed(2);
        console.log(`CPU ${i + 1}: ${cpu.model} - ${speedGHz} GHz`);
      });
      break;
    }

    case '--homedir':
      console.log(os.homedir());
      break;

    case '--username': {
      console.log(os.userInfo().username);
      break;
    }

    case '--architecture':
      console.log(os.arch());
      break;

    default:
      console.log('Usage: node os.js [option]');
      console.log('Options:');
      console.log('  --EOL            Prints default system End-Of-Line');
      console.log('  --cpus           Prints CPUs info (total & each CPU\'s details)');
      console.log('  --homedir        Prints the home directory');
      console.log('  --username       Prints current OS username');
      console.log('  --architecture   Prints CPU architecture');
      break;
  }
}

export default operationSystem;
