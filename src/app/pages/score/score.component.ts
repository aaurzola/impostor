import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Player } from '@app/model/player';
import { AppState } from '@app/state/app.state';
import { selectPlayerList } from '@app/state/players/players.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
})
export class ScoreComponent implements OnInit{

  playerList$: Observable<Player[]> = new Observable();

  constructor(
    private store: Store<AppState>,
    private _location: Location)
  { }

  ngOnInit(): void {
    this.playerList$ = this.store.select(selectPlayerList);
  }

  back() {
    this._location.back();
  }

}
