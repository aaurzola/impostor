import { Component, Input } from '@angular/core';
import { faMinus, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Player } from '@app/model/player';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
})
export class PlayerListComponent {

  //icons
  addScore = faPlus;
  decrementScore = faMinus;
  editIcon = faPen

  @Input() playerList$: Observable<Player[]> = new Observable;
}
