require('dotenv').config();
const os = require('os');

// а - основная инфа
function showOSInfo() {
  console.log('Платформа:', os.platform());
  console.log('Свободная память (GB):', (os.freemem() / 1024 / 1024 / 1024).toFixed(2));
  console.log('Домашняя директория:', os.homedir());
  console.log('Имя компьютера:', os.hostname());
  console.log('Сетевые интерфейсы:', os.networkInterfaces());
}

// б - проверка свободной памяти, больше 4 GB
function checkFreeMemory() {
  const freeMemoryGB = os.freemem() / 1024 / 1024 / 1024;

  if (freeMemoryGB > 4) {
    console.log('Свободной памяти больше 4 GB');
  } else {
    console.log('Свободной памяти меньше или равно 4 GB');
  }
}

// с - режим доступа
function runWithAccess() {
  if (process.env.MODE === 'admin') {
    console.log('Доступ разрешён (admin)');
    showOSInfo();
  } else {
    console.log('Доступ запрещён. Недостаточно прав.');
  }
}


runWithAccess();
checkFreeMemory();