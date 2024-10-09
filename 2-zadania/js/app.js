console.log('Zadanie 1');
const users = [
  1,
  'Paweł',
  'Kowalski',
  'Paweł.Kowalski@zsegw.com',
  30,
  1000,
  2,
  'Anna',
  'Mazur',
  'Anna.Mazur@zsegw.com',
  25,
  500,
  3,
  'Piotr',
  'Winiarski',
  'Piotr.Wisniewski@zsegw.com',
  40,
  2000,
];

const fixData = (data) => {
  const result = [];
  for (let i = 0; i < data.length; i += 6) {
    const [id, name, surname, email, age, cash] = data.slice(i, i + 6);
    result.push({ id, name, surname, email, age, cash });
  }
  return result;
};

const fixedUsers = fixData(users);

console.log('Zadanie 2');
const totalCash = fixedUsers.reduce((sum, user) => sum + user.cash, 0);
const averageAge = fixedUsers.reduce((sum, user) => sum + user.age, 0) / fixedUsers.length;
const emails = fixedUsers.map((user) => user.email);

console.log(`Całkowita kwota pieniędzy: ${totalCash}`);
console.log(`Średni wiek: ${averageAge}`);
console.log('Lista maili:', emails);
