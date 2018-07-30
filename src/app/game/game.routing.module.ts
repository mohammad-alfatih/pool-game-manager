import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamePageComponent } from './containers/game-page/game-page.component';

const gameRoutes: Routes = [
  { path: '', component: GamePageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(gameRoutes)
  ],
  exports: [RouterModule]
})
export class GameRoutingModule {}
