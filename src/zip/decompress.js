import { createBrotliDecompress } from "zlib";
import fs from 'fs';

const decompress = async (source, destination) => {
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(destination);

  const brotli = createBrotliDecompress();

  readStream.pipe(brotli).pipe(writeStream);
};

export default decompress;
