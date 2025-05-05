import { rename as renameFile } from 'fs/promises';

const rename = async (oldPath, newPath) => {
  await renameFile(oldPath, newPath);
};

export default rename;
