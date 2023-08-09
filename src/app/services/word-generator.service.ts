import { Injectable } from '@angular/core';
import { words_es } from '@app/data/word-ES';
import { gameWord } from '@app/model/gameWord';

@Injectable({
  providedIn: 'root'
})
export class WordGeneratorService {

  displayedWord: gameWord = {text: '', category: ''};
  wordSource = words_es;

  getWord(): void {
    this.displayedWord = this.wordSource[Math.floor(Math.random() * this.wordSource.length)];
  }

  placeImpostorInto(array: gameWord[]): void {
    const randomIndex = Math.floor(Math.random() * array.length);
    array.splice(randomIndex, 1, {text: "Impostor", category: array[0].category});
  }

  getWordListForRound(numberOfPlayers: number): gameWord[] {
    this.getWord();
    const wordList: gameWord[] = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      wordList.push(this.displayedWord);
    }

    this.placeImpostorInto(wordList);
    return wordList;
  }
}
