import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrementPlayers, incrementPlayers } from 'src/app/state/players/players.actions';

@Component({
  selector: 'app-players-number',
  templateUrl: './players-number.component.html',
  styleUrls: ['./players-number.component.scss']
})
export class PlayersNumberComponent implements OnInit {

  playerCount$: Observable<number>;

  constructor(private store: Store<{players: {count: number}}>) {
    this.playerCount$ = this.store.pipe(select('players', 'count'));
  }

  ngOnInit(): void {
  }

  incrementPlayers(): void {
    this.store.dispatch(incrementPlayers());
  }

  decrementPlayers(): void {
    this.store.dispatch(decrementPlayers());
  }

}
