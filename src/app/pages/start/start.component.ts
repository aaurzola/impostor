import { Component } from '@angular/core';
import { Player } from '@app/model/player';
import { AppState } from '@app/state/app.state';
import { loadGame } from '@app/state/game/game.actions';
import { selectPlayerList } from '@app/state/players/players.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
})
export class StartComponent {

  playerList$: Observable<Player[]>;

  constructor(private store: Store<AppState>) {
    this.playerList$ = this.store.select(selectPlayerList);
  }

  startGame() {
    this.playerList$.subscribe(
      playerlist => {
        this.store.dispatch(loadGame({numberOfPlayers: playerlist.length}));
      }
    )
  }

}
