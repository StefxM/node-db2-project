
module.exports = {

 
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/car-dealer.db3',
    },

    migrations: {
      directory: './data/migrations'
    }
}
