const dbConnection = process.env.DATABASE_URL;

module.exports = {

  development: {
    client: 'pg',
    //connection: 'postgres://127.0.0.1/pawsnfind',
    connection: {
      host: '127.0.0.1',
      database: 'pawsnfind',
      user: 'postgres',
      password: 'Danny123'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
}
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/pawsitive_test.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
}
  },

  staging: {
    client: 'pg',
    connection: dbConnection,
    useNullAsDefault: true,
     migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    useNullAsDefault: true,
     migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
