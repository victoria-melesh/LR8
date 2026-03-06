const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');

const SERVICE = ['node_modules', '.git', 'package-lock.json'];

//синхронные

function writeFileSync(filePath, data) {
  fs.writeFileSync(filePath, data);
}
function readFileSync(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}
function rewriteFileSync(filePath, data) {
  fs.writeFileSync(filePath, data);
}
function clearFileSync(filePath) {
  fs.writeFileSync(filePath, '');
}

function cleanFileSync(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/\d+/g, '').toLowerCase();
  fs.writeFileSync(filePath, content);
}
function copyFileSync(src, dest) {
  fs.copyFileSync(src, dest);
}
function createDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}
function removeDirSync(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true });
  }
}


function listFilesSync(dir = process.cwd()) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    if (SERVICE.includes(item)) return;
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      listFilesSync(fullPath);
    } else {
      console.log(fullPath);
    }
  });
}
function clearProjectSync(dir = process.cwd()) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    if (SERVICE.includes(item)) return;
    fs.rmSync(path.join(dir, item), { recursive: true });
  });
}






//асинхронные


async function writeFileAsync(filePath, data) {
  await fsp.writeFile(filePath, data);
}
async function readFileAsync(filePath) {
  return await fsp.readFile(filePath, 'utf-8');
}
async function rewriteFileAsync(filePath, data) {
  await fsp.writeFile(filePath, data);
}
async function clearFileAsync(filePath) {
  await fsp.writeFile(filePath, '');
}

async function cleanFileAsync(filePath) {
  let content = await fsp.readFile(filePath, 'utf-8');
  content = content.replace(/\d+/g, '').toLowerCase();
  await fsp.writeFile(filePath, content);
}
async function copyFileAsync(src, dest) {
  await fsp.copyFile(src, dest);
}
async function createDirAsync(dirPath) {
  await fsp.mkdir(dirPath, { recursive: true });
}
async function removeDirAsync(dirPath) {
  await fsp.rm(dirPath, { recursive: true });
}

async function listFilesAsync(dir = process.cwd()) {
  const items = await fsp.readdir(dir);
  for (const item of items) {
    if (SERVICE.includes(item)) continue;
    const fullPath = path.join(dir, item);
    const stat = await fsp.stat(fullPath);
    if (stat.isDirectory()) {
      await listFilesAsync(fullPath);
    } else {
      console.log(fullPath);
    }
  }
}
async function clearProjectAsync(dir = process.cwd()) {
  const items = await fsp.readdir(dir);
  for (const item of items) {
    if (SERVICE.includes(item)) continue;
    await fsp.rm(path.join(dir, item), { recursive: true });
  }
}

//пример

writeFileSync('sync.txt', 'sync test');
//cleanFileSync('sync.txt');

(async () => {
   await writeFileAsync('async.txt', 'async test');
   //await cleanFileAsync('async.txt');
})();