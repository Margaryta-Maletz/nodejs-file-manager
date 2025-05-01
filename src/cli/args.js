const parseArgs = () => {
  const argVars = process.argv;

  const parsedArgs = {};

  argVars.forEach(arg => {
    if (arg.startsWith('--')) {
      const [key, value] = arg.slice(2).split('=');

      parsedArgs[key] = value || '';
    }
  });

  return parsedArgs;
};

export default parseArgs;
