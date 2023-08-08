import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/state/app.state';
import { selectPlayerList } from '@app/state/players/players.selector';
import { Player } from '@app/model/player';
import { endGame } from '@app/state/game/game.actions';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss'],
})
export class EndComponent implements OnInit{
  playerList$: Observable<Player[]>;
  startingPlayer = 0;

  constructor(private store: Store<AppState>) {
    this.playerList$ = this.store.select(selectPlayerList);
  }

  ngOnInit(): void {
    this.playerList$.subscribe(
      (playerList) => {
        this.startingPlayer = Math.ceil(Math.random() * playerList.length);
      }
    );
  }

  endGame() {
    this.store.dispatch(endGame());
  }

}
