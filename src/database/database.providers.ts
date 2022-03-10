import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'mysql',
        port: 3306,
        username: 'root',
        password: '12032000',
        database: 'nestjs',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
