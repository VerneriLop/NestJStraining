import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Tietokannan tyyppi
      host: process.env.DB_HOST, // Tietokantapalvelimen osoite
      port: parseInt(process.env.DB_PORT, 10), // Postgresin portti
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // Lataa TypeORM-entiteetit automaattisesti
      synchronize: true, // Luo taulut automaattisesti (vain kehityksessä)
    }),
  ],
  controllers: [AppController, HelloController],
  providers: [AppService],
})
export class AppModule {}
