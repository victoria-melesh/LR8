const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');

function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function writeFile(filePath, data) {
  fs.writeFileSync(filePath, data);
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
}

function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true });
  }
}

module.exports = {
  createDir,
  writeFile,
  readFile,
  copyFile,
  removeDir
};