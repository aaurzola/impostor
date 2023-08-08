import { Component, OnInit } from '@angular/core';
import { Player } from '@app/model/player';
import { AppState } from '@app/state/app.state';
import { selectPlayerList } from '@app/state/players/players.selector';
import { faEye, faForward, faStop } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WordGeneratorService } from 'src/app/services/word-generator.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  playerList$: Observable<Player[]>;
  currentPlayer = 1;
  wordList: string[] = [];
  hideWord = true;
  players = 0;

  //icons
  viewIcon = faEye;
  nextIcon = faForward;
  stopIcon = faStop;

  constructor(
    private store: Store<AppState>,
    private wordService: WordGeneratorService
  ) {
    this.playerList$ = this.store.select(selectPlayerList);
  }

  ngOnInit(): void {
    this.playerList$.subscribe(
      (playerList) => {
        this.wordList = this.wordService.getWordListForRound(playerList.length);
        this.players = playerList.length;
      }
    );
  }

  nextPlayer(): void {
    this.currentPlayer = Math.min(this.players, this.currentPlayer + 1);
  }

  visibilityOn(): void {
    this.hideWord = false;
  }

  visibilityOff(): void {
    this.hideWord = true;
  }
}
