const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ orders: [] }).write();
db.set('orders', []).write();

// Add code below here to create three orders with the data provided in the instructions
db.get('orders')
  .push({id: 1, cost: "24.20", discountCode: 'APEN23', items: ['books', 'food', 'clothing']})
  .write()
db.get('orders')
  .push({id: 2, cost: "475.20", discountCode: 'QTZPE3', items: ['TV']})
  .write()
db.get('orders')
  .push({id: 3, cost: "4899.20", discountCode: 'LMSOW1', items: ['car']})
  .write()
