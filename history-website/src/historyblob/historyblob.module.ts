import { Module } from '@nestjs/common';
import { HistoryblobService } from './historyblob.service';
import { HistoryblobController } from './historyblob.controller';

@Module({
  controllers: [HistoryblobController],
  providers: [HistoryblobService]
})
export class HistoryblobModule {}
