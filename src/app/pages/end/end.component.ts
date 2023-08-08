import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/state/app.state';
import { selectPlayerList } from '@app/state/players/players.selector';
import { Player } from '@app/model/player';

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

}
