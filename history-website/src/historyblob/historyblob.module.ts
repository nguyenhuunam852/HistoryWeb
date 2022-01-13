import { Module } from '@nestjs/common';
import { HistoryblobService } from './historyblob.service';
import { HistoryblobController } from './historyblob.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabEntity } from 'src/entities/tab.entity';
import { DatingEntity } from 'src/entities/dating.entity';
import { BlobEntity } from 'src/entities/blob.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TabEntity,DatingEntity,BlobEntity])],
  controllers: [HistoryblobController],
  providers: [HistoryblobService,TypeOrmModule]
})
export class HistoryblobModule {}
