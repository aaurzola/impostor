import { Component, Input } from '@angular/core';
import { faMinus, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Player } from '@app/model/player';
import { Observable } from 'rxjs';
import { AppState } from '@app/state/app.state';
import { Store } from '@ngrx/store';
import { playerScore } from '@app/state/score/score.actions';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
})
export class PlayerListComponent {

  //icons
  addIcon = faPlus;
  minusIcon = faMinus;
  editIcon = faPen

  @Input() playerList$: Observable<Player[]> = new Observable;

  constructor(private store: Store<AppState>) {}


  addScore(playerId: number): void {
    this.store.dispatch(playerScore.increment({playerId}));
  }

  decrementScore(playerId: number): void {
    this.store.dispatch(playerScore.decrement({playerId}));
  }
}
