import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordGeneratorService {

  constructor() { }

  getWord(): string {
    return "";
  }
}
