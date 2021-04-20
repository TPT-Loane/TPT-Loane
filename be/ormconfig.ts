module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'test',
    entities: ['dist/**/*.model.js'],
    migrations: ['dist/src/database/migrations/*.js'],
    cli: {
      migrationsDir: 'src/database/migrations',
    },
  };