import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoryblobDto } from './create-historyblob.dto';

export class UpdateHistoryblobDto extends PartialType(CreateHistoryblobDto) {}
