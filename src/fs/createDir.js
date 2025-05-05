import { mkdir, stat } from 'fs/promises';

const createDir = async (dirPath) => {
  await stat(dirPath)
    .then(
      () => {
        console.error('Operation failed');
      },
      (error) => {
        if (error.code === 'ENOENT') {
          mkdir(dirPath);
        } else {
          console.error('Operation failed');
        }
      });
};

export default createDir;
