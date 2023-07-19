import { Injectable } from '@angular/core';
import { words } from '../data/word-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordGeneratorService {

  constructor() { }

  displayedWord: string = "";

  getWord(): void {
    this.displayedWord = words[Math.floor(Math.random() * words.length)];
  }

  placeImpostorInto(array: string[]): void {
    const randomIndex = Math.floor(Math.random() * array.length);
    array.splice(randomIndex, 1, "Impostor");
  }

  getWordListForRound(players: Observable<number>): string[] {
    this.getWord();
    const wordList: string [] = [];

    players.subscribe((numberOfPlayers: number) => {
      for (let i = 0; i < numberOfPlayers; i++) {
        wordList.push(this.displayedWord);
      }
    });

    this.placeImpostorInto(wordList);
    return wordList;
  }
}
