import { Injectable } from '@nestjs/common';
const arr = [
  'Pablo', 'Juan', 'Diego'
]
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(): any {
    return arr ;
  }
}
