import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class DatabaseService {
  constructor(private httpService: HttpService) {}
  async findAll(): Promise<any> {
    // const result = await this.httpService.get(
    //   'https://seeshanchu.cdn.newt.so/v1',
    // );
    // return result;
    // return 'test';
    const test = await this.httpService.get(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    return test;
  }
}
