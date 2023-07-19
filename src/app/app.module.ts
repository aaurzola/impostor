import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordContainerComponent } from './components/word-container/word-container.component';
import { PlayersNumberComponent } from './components/players-number/players-number.component';
import { StoreModule } from '@ngrx/store';
import { playersReducer } from './state/players/players.reducer';

@NgModule({
  declarations: [
    AppComponent,
    WordContainerComponent,
    PlayersNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ players: playersReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
