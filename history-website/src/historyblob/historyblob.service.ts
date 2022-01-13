import { Injectable } from '@nestjs/common';
import { CreateHistoryblobDto } from './dto/create-historyblob.dto';
import { UpdateHistoryblobDto } from './dto/update-historyblob.dto';

@Injectable()
export class HistoryblobService {
  create(createHistoryblobDto: CreateHistoryblobDto) {
    return 'This action adds a new historyblob';
  }

  findAll() {
    return `This action returns all historyblob`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historyblob`;
  }

  update(id: number, updateHistoryblobDto: UpdateHistoryblobDto) {
    return `This action updates a #${id} historyblob`;
  }

  remove(id: number) {
    return `This action removes a #${id} historyblob`;
  }
}
