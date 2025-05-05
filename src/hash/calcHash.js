import crypto from 'crypto';
import fs from 'fs';

const calculateHash = (fileName) => {
  const fileStream = fs.createReadStream(fileName);

  const hash = crypto.createHash('sha256');

  fileStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  fileStream.on('end', () => {
    const resultHash = hash.digest('hex');
    console.log(resultHash);
  });
};

export default calculateHash;
