import { stat, writeFile } from 'fs/promises';

const create = async (filePath, content = '') => {
  await stat(filePath)
    .then(
      () => {
        console.error('Operation failed');
      },
      (error) => {
        if (error.code === 'ENOENT') {
          writeFile(filePath, content);
        } else {
          console.error('Operation failed');
      }
  });
};

export default create;
