import { stat, unlink } from 'fs/promises';

const remove = async (filePath) => {
  await stat(filePath).catch(() => {
    throw Error('Operation failed');
  });

  await unlink(filePath);
};

export default remove;
