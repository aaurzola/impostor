import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { StartComponent } from './pages/start/start.component';
import { EndComponent } from './pages/end/end.component';
import { ScoreComponent } from './pages/score/score.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  { path: 'start', component: StartComponent},
  { path: 'game', component: GameComponent },
  { path: 'end', component: EndComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
