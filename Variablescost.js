// Before optimization
let users = [];
for (let i = 0; i < 10000; i++) {
  users.push({ id: i, name: `User ${i}` });
}

// After optimization
const user = new Array(10000);
for (let i = 0; i < 10000; i++) {
  users[i] = { id: i, name: `User ${i}` };
}