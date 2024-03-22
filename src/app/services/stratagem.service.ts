import { Injectable } from '@angular/core';

@Injectable()
export class StratagemService {
num = 0;
  constructor() {
    this.num = Math.random();
  }
}
