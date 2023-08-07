import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss'],
})
export class EndComponent implements OnInit{
  playerCount$: Observable<number>;
  startingPlayer = 0;

  constructor(private store: Store<{ players: { count: number } }>) {
    this.playerCount$ = this.store.pipe(
      select('players', 'count'),
      map((count: number) => count)
    );
  }
  ngOnInit(): void {
    this.playerCount$.subscribe(
      (count) => {
        this.startingPlayer = Math.ceil(Math.random() * count);
      }
    );
  }

}
