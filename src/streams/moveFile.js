import copyFile from './copyFile.js';
import remove from '../fs/delete.js';

const moveFile = async (source, dirName) => {
  await copyFile(source, dirName);
  await remove(source);
};

export default moveFile;
