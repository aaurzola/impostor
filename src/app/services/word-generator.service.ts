import { Injectable } from '@angular/core';
import { words } from '../data/word-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordGeneratorService {

  displayedWord = "";
  wordHistory: string[] = [];

  getWord(): void {
    this.displayedWord = words[Math.floor(Math.random() * words.length)];
  }

  placeImpostorInto(array: string[]): void {
    const randomIndex = Math.floor(Math.random() * array.length);
    array.splice(randomIndex, 1, "Impostor");
  }

  getWordListForRound(numberOfPlayers: number): string[] {
    this.getWord();
    const wordList: string [] = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      wordList.push(this.displayedWord);
    }

    this.placeImpostorInto(wordList);
    return wordList;
  }

  saveToHistory(word: string) {
    this.wordHistory.push(word);
  }

  hasBeenUsed(word: string): boolean {
    return this.wordHistory.includes(word);
  }
}
