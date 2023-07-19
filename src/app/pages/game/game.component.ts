import { Component, OnInit, OnDestroy } from '@angular/core';
import { faDiagramNext, faEye, faForward, faStop } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { WordGeneratorService } from 'src/app/services/word-generator.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  playerCount$: Observable<number>;
  currentPlayer: number = 1;
  wordList: string[] = [];
  hideWord = true;
  players: number = 0;

  viewIcon = faEye;
  nextIcon = faForward;
  stopIcon = faStop;

  constructor(
    private store: Store<{ players: { count: number } }>,
    private wordService: WordGeneratorService
  ) {
    this.playerCount$ = this.store.pipe(
      select('players', 'count'),
      map((count: number) => count)
    );
  }

  ngOnInit(): void {
    this.wordList = this.wordService.getWordListForRound(this.playerCount$);
    this.playerCount$.subscribe((count) => this.players = count);
  }
  ngOnDestroy(): void {
    this.playerCount$
  }

  nextPlayer(): void {
    this.currentPlayer = Math.min(this.players, this.currentPlayer + 1);
  }

  visibilityOn(): void {
    this.hideWord = false;
  }

  visibilityOff(): void {
    this.hideWord = true;
  }

  endRound(): void {}
}
