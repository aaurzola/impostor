import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { WordGeneratorService } from '@app/services/word-generator.service';
import { of, map } from 'rxjs';
import { startGame } from './game.actions';

@Injectable()
export class GameEffects {

  loadGameProps$ = createEffect(() => this.actions$.pipe(
    ofType('[Game] Load Game'),
    switchMap( (action: { numberOfPlayers: number }) =>
      of(this.wordService.getWordListForRound(action.numberOfPlayers)).pipe(
        map(data =>
          startGame({
            numberOfPlayers: action.numberOfPlayers,
            startingPlayerId: Math.ceil(Math.random() * action.numberOfPlayers),
            wordList: data
          })
        )
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private wordService: WordGeneratorService
  ) {}
}
