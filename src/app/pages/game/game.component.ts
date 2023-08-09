import { Component, OnInit } from '@angular/core';
import { gameWord } from '@app/model/gameWord';
import { Player } from '@app/model/player';
import { AppState } from '@app/state/app.state';
import { nextPlayer } from '@app/state/game/game.actions';
import { selectCurrentPlayer, selectWordList } from '@app/state/game/game.selector';
import { selectPlayerList } from '@app/state/players/players.selector';
import { faEye, faForward, faStop } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {
  playerList$: Observable<Player[]>;
  wordList$: Observable<gameWord[]> = new Observable();
  currentPlayer$: Observable<number>;
  currentPlayerWord$ : Observable<gameWord> = new Observable();
  hideWord = true;
  players = 0;

  isLastPlayer$: Observable<boolean> = new Observable();

  //icons
  viewIcon = faEye;
  nextIcon = faForward;
  stopIcon = faStop;

  constructor(
    private store: Store<AppState>,
  ) {
    this.playerList$ = this.store.select(selectPlayerList);
    this.currentPlayer$ = this.store.select(selectCurrentPlayer);
  }

  ngOnInit(): void {
    this.playerList$.subscribe(
      (playerList) => {
        this.wordList$ = this.store.select(selectWordList);
        this.players = playerList.length;
      }
    );

    this.currentPlayer$.subscribe(
      (currentPlayer) => {
        this.currentPlayerWord$ = this.wordList$.pipe(
          map(wordList => wordList[currentPlayer - 1])
        );
      }
    )

    this.isLastPlayer$ = this.currentPlayer$.pipe(
      map(currentPlayer => currentPlayer === this.players)
    );
  }

  nextPlayer(): void {
    this.store.dispatch(nextPlayer());
  }

  visibilityOn(): void {
    this.hideWord = false;
  }

  visibilityOff(): void {
    this.hideWord = true;
  }
}
