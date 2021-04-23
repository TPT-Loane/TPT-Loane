module.exports = {
  type: 'postgres',
  host: process.env.IP,
  port: process.env.PORT,
  username: process.env.DATABASE_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: ['dist/**/*.model.js'],
  migrations: ['dist/src/database/migrations/*.js'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
