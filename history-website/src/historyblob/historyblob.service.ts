import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlobEntity } from 'src/entities/blob.entity';
import { DatingEntity } from 'src/entities/dating.entity';
import { TabEntity } from 'src/entities/tab.entity';
import { Repository } from 'typeorm';
import { BlobDto } from './dto/blob.dto';
import { DatingBlobDto } from './dto/dating-blob.dto';
import { TabBlobDto } from './dto/tab-blob.dto';

@Injectable()
export class HistoryblobService {
  constructor(
    @InjectRepository(TabEntity)
    private tabRepository: Repository<TabEntity>,
    @InjectRepository(DatingEntity)
    private datingRepository: Repository<DatingEntity>,
    @InjectRepository(BlobEntity)
    private blobRepository: Repository<BlobEntity>
  ) {}

  async createDating(dating:DatingBlobDto):Promise<DatingBlobDto>{
    return await this.datingRepository.save(dating);
  }

  createTab(tab:TabBlobDto){
    return this.tabRepository.save(tab);
  }

  async createBlob(blob:BlobDto){
    var sblob = new BlobEntity();
    sblob.datingId = blob.dating_id;
    sblob.tabId = blob.tab_id;
    sblob.content = blob.content;
    return await this.blobRepository.save(sblob);
  }

  async getlistDating(){
    return await this.datingRepository.find();
  }

  async getlistTab(){
    return await this.tabRepository.find();
  }

  async createTabbyName(name:string){
    var tab = new TabEntity();
    tab.tabname = name;
    return await this.tabRepository.save(tab);
  }


  async getBlobbyIndex(tabindex:number,datingindex:number){
    if(tabindex==0 || datingindex ==0){
      return (await this.blobRepository.find())[0]
    }
    console.log(tabindex,datingindex)
    var result = await this.blobRepository.findOne({
      where: { 
        tabId: tabindex,
        datingId: datingindex,
      }
    })
    return result;
  }




  findAll() {
    return `This action returns all historyblob`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historyblob`;
  }

  remove(id: number) {
    return `This action removes a #${id} historyblob`;
  }
}
