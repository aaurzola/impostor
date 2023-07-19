import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersNumberComponent } from './components/players-number/players-number.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { playersReducer } from './state/players/players.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
import { StartComponent } from './pages/start/start.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GameComponent } from './pages/game/game.component';
import { EndComponent } from './pages/end/end.component';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['players'], rehydrate: true })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent, PlayersNumberComponent, StartComponent, GameComponent, EndComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ players: playersReducer }, { metaReducers }),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
