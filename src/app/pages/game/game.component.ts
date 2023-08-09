import { Component, OnInit } from '@angular/core';
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
  wordList$: Observable<string[]> = new Observable();
  currentPlayer$: Observable<number>;
  currentPlayerWord$ : Observable<string> = new Observable();
  hideWord = true;
  players = 0;

  isLastPlayer$: Observable<boolean> = new Observable(); // Add this line

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
    // this.currentPlayer$ = Math.min(this.players, this.currentPlayer$ + 1);
    this.store.dispatch(nextPlayer());
  }

  visibilityOn(): void {
    this.hideWord = false;
  }

  visibilityOff(): void {
    this.hideWord = true;
  }
}
