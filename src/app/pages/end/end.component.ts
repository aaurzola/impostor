import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/state/app.state';
import { selectNumberOfPlayers, selectPlayerList } from '@app/state/players/players.selector';
import { Player } from '@app/model/player';
import { endGame, loadGame } from '@app/state/game/game.actions';
import { selectStartingPlayer } from '@app/state/game/game.selector';
@Component({
  selector: 'app-end',
  templateUrl: './end.component.html'
})
export class EndComponent implements OnInit{
  playerList$: Observable<Player[]> = new Observable();
  startingPlayer$: Observable<number>;
  numberOfPlayers$: Observable<number> = new Observable();

  constructor(private store: Store<AppState>) {
    this.startingPlayer$ = this.store.select(selectStartingPlayer);
    this.numberOfPlayers$ = this.store.select(selectNumberOfPlayers);
  }
  ngOnInit(): void {
    this.playerList$ = this.store.select(selectPlayerList);
  }

  newRound() {
    this.numberOfPlayers$.subscribe( (numberOfPlayers) => {
        this.store.dispatch(loadGame({numberOfPlayers}));
      });
  }

  endGame() {
    this.store.dispatch(endGame());
  }

}
