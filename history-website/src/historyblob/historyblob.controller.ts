import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HistoryblobService } from './historyblob.service';
import { DatingBlobDto } from './dto/dating-blob.dto';
import { BlobDto } from './dto/blob.dto';
import { TabBlobDto } from './dto/tab-blob.dto';

@Controller('historyblob')
export class HistoryblobController {
  constructor(private readonly historyblobService: HistoryblobService) {}

  @Post('datingcreate')
  async createDating(@Body() dating: DatingBlobDto) {
    console.log(dating);
    var result = await this.historyblobService.createDating(dating);
    console.log(result)
    if(result){
      return this.historyblobService.getlistDating();
    }
    else{
      return {
        "Fail":"Fail"
      }
    }
  }

  @Post('tabcreate')
  createTab(@Body() tab: TabBlobDto) {
    return this.historyblobService.createTab(tab);
  }

  @Post('blobcreate')
  async createBlob(@Body() blob: BlobDto) {
    console.log(blob)
    var result = await this.historyblobService.createBlob(blob)
    return result;
  }

  @Get('datinglist')
  async listDating() {
    var result = {
      "dating": await this.historyblobService.getlistDating(),
      "tab": await this.historyblobService.getlistTab()
    }
    return result;
  }

  @Get('datinglistindex')
  async listDatingIndex(@Query() query) {
    console.log(query)
    var get = await this.historyblobService.getBlobbyIndex(query.tabindex,query.datingindex);
    console.log(get)
    var result = {
      "dating": await this.historyblobService.getlistDating(),
      "tab": await this.historyblobService.getlistTab(),
      "selectBlob": await this.historyblobService.getBlobbyIndex(query.tabindex,query.datingindex)
    }
    return result;
  }





}
