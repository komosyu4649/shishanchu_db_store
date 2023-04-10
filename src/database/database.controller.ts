import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
  constructor(private readonly DatabaseService: DatabaseService) {}
  @Get()
  async findAll(): Promise<string> {
    return this.DatabaseService.findAll();
  }
}
