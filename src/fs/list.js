import { readdir } from 'fs/promises';

const TYPE = {
  file: 'file',
  dir: 'directory',
}

const list = async (fileFolderPath) => {
  const files = await readdir(fileFolderPath, {
    withFileTypes: true
  });

  const sortFiles = files
    .map((file) => ({Name: file.name, Type: file.isFile() ? TYPE.file : TYPE.dir }))
    .sort((a, b) => a - b);


  console.table([
    ...sortFiles.filter(file => file.Type === TYPE.dir),
    ...sortFiles.filter(file => file.Type === TYPE.file)]
  );
};

export default list;
