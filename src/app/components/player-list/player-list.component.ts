import { Component, Input } from '@angular/core';
import { faCheck, faMinus, faPen, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Player } from '@app/model/player';
import { Observable } from 'rxjs';
import { AppState } from '@app/state/app.state';
import { Store } from '@ngrx/store';
import { playerScore } from '@app/state/score/score.actions';
import { editName, startEditingName, stopEditingName } from '@app/state/players/players.actions';
import { selectEditPlayerId } from '@app/state/players/players.selector';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
})
export class PlayerListComponent {

  //icons
  addIcon = faPlus;
  minusIcon = faMinus;
  editIcon = faPen
  acceptEdit = faCheck
  cancelEdit = faXmark

  @Input() playerList$: Observable<Player[]> = new Observable;
  editingPlayer$: Observable<number | null> = new Observable();
  playerNameEdit = '';

  constructor(private store: Store<AppState>) {
    this.editingPlayer$ = this.store.select(selectEditPlayerId);
  }

  addScore(playerId: number): void {
    this.store.dispatch(playerScore.increment({playerId}));
  }

  decrementScore(playerId: number): void {
    this.store.dispatch(playerScore.decrement({playerId}));
  }

  startEditing(playerId: number): void {
    this.clearEditName();
    this.store.dispatch(startEditingName({playerId}));
  }

  cancelEditing() {
    this.store.dispatch(stopEditingName());
    this.clearEditName();
  }

  editName(playerId: number) {
    if (this.playerNameEdit !== '') {
      this.store.dispatch(editName({playerId, newName: this.playerNameEdit}));
    }
    this.store.dispatch(stopEditingName());
    this.clearEditName();
  }

  clearEditName() {
    this.playerNameEdit = '';
  }
}
