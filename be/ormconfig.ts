module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_IP,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.model.{.js,.ts}', 'dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/database/migrations/*{.js,.ts}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
