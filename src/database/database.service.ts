import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class DatabaseService {
  async findAll(): Promise<string> {
    return 'This action returns all database service';
  }
}
