const { Client } = require('pg')

const client = new Client({
  user: 'administrator',
  host: 'localhost',
  database: 'av2000',
  password: '20002000',
  native: false,
  // port: 3211,
})
client.connect()
client.query('SELECT * FROM l1tag', (err, res) => {
  console.log(err, res)
  client.end()
});
