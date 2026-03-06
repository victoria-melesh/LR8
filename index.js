require('dotenv').config();

console.log('Текущий режим работы приложения:', process.env.MODE);


console.log('Имя:', process.env.FIRST_NAME);
console.log('Фамилия:', process.env.LAST_NAME);
console.log('Группа:', process.env.GROUP_NUMBER);
console.log('Номер по списку:', process.env.LIST_NUMBER);