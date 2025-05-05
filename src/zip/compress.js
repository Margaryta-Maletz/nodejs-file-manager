import { createBrotliCompress } from "zlib";
import fs from 'fs';

const compress = async (source, destination) => {
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(destination);

  const brotli = createBrotliCompress();

  readStream.pipe(brotli).pipe(writeStream);
};

export default compress;
