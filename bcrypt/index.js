const bcrypt = require('bcrypt');

const passwords = [
  'pass1', 'pass2', 'pass3', 'pass4', 'pass5',
  'pass6', 'pass7', 'pass8', 'pass9', 'pass10',
  'pass11', 'pass12', 'pass13'
];

const SALT_ROUNDS = 10;

async function hashPasswords() {
  for (let i = 0; i < passwords.length; i++) {
    const start = Date.now();

    await bcrypt.hash(passwords[i], SALT_ROUNDS);

    const end = Date.now();
    console.log(`Пароль ${i + 1}: ${end - start} ms`);
  }

  console.log('\nВывод:');
  console.log(
    'Время хеширования отличается, так как bcrypt использует соль и ' +
    'выполняет операции для защиты от перебора.'
  );
}

hashPasswords();