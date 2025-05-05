import fs from 'fs';

const read = async (fileName) => {
  const fileStream = fs.createReadStream(fileName);
  let result = '';

  fileStream.on('error', () => {
    console.error(`Operation failed`);
  });

  fileStream.on('data', (chunk) => {
    result += chunk;
  });

  fileStream.on('end', () => {
    process.stdout.write(result + '\n');
  });
};

export default read;
