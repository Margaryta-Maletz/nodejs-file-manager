import fs from 'fs';
import { basename, join } from 'path';

const copyFile = async (source, dirName) => {
  const readStream = fs.createReadStream(source);
  const fileName = basename(source);
  const destination = join(dirName, fileName);
  const writeStream = fs.createWriteStream(destination);

  readStream.on('error', () => {
    console.error(`Operation failed`);
  });

  writeStream.on('error', () => {
    console.error(`Operation failed`);
  });

  readStream.pipe(writeStream);
};

export default copyFile;
