// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/mydatabase.sqlite3'  // this is the local file where the SQLite data will be stored
    },
    useNullAsDefault: true, // needed for SQLite only
    migrations: {
      directory: './migrations'  // Corrected location of your migration files
    },
    seeds: {
      directory: './seeds'  // Assuming this is still the correct path for your seed files
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);  // enforce foreign key constraints with SQLite, since it's off by default
      },
    },
  },
}
