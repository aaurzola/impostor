import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersNumberComponent } from './components/players-number/players-number.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { StartComponent } from './pages/start/start.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GameComponent } from './pages/game/game.component';
import { EndComponent } from './pages/end/end.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { ScoreComponent } from './pages/score/score.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './state/game/game.effects';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['players'], rehydrate: true })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent, PlayersNumberComponent, StartComponent, GameComponent, EndComponent, PlayerListComponent, ScoreComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),
    FontAwesomeModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([GameEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
