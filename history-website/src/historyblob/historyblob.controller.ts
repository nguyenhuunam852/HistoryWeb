import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoryblobService } from './historyblob.service';
import { CreateHistoryblobDto } from './dto/create-historyblob.dto';
import { UpdateHistoryblobDto } from './dto/update-historyblob.dto';

@Controller('historyblob')
export class HistoryblobController {
  constructor(private readonly historyblobService: HistoryblobService) {}

  @Post()
  create(@Body() createHistoryblobDto: CreateHistoryblobDto) {
    return this.historyblobService.create(createHistoryblobDto);
  }

  @Get()
  findAll() {
    return this.historyblobService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historyblobService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoryblobDto: UpdateHistoryblobDto) {
    return this.historyblobService.update(+id, updateHistoryblobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historyblobService.remove(+id);
  }
}
