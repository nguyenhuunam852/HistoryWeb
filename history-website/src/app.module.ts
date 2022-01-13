import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { HistoryblobModule } from './historyblob/historyblob.module';

@Module({
  imports: [HistoryblobModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
