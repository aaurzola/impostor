import { Component } from '@angular/core';
import { Player } from '@app/model/player';
import { AppState } from '@app/state/app.state';
import { selectPlayerList } from '@app/state/players/players.selector';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrementPlayers, incrementPlayers } from 'src/app/state/players/players.actions';

@Component({
  selector: 'app-players-number',
  templateUrl: './players-number.component.html',
  styleUrls: ['./players-number.component.scss']
})
export class PlayersNumberComponent {

  faPlus = faPlusSquare;
  faMinus = faMinusSquare;

  players$: Observable<Player[]>;
  playerCount = 0;

  constructor(private store: Store<AppState>) {
    this.players$ = this.store.select(selectPlayerList);
    this.players$.subscribe(players => this.playerCount = players.length)
  }

  incrementPlayers(): void {
    this.store.dispatch(incrementPlayers());
  }

  decrementPlayers(): void {
    this.store.dispatch(decrementPlayers());
  }

}
