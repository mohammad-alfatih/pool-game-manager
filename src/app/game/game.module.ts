import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game.routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule, Actions } from '@ngrx/effects';
import { GameFacade } from './state/game.facade';

import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

import { GameService } from './../providers/game.service';
import { reducer } from './state/game.reducer';

import { GamePageComponent } from './containers/game-page/game-page.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('game', reducer),
    EffectsModule.forFeature([GameFacade]),
    GameRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder,
    Actions,
    GameService,
    GameFacade
  ],
  declarations: [GamePageComponent]
})
export class GameModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GameModule,
      providers: [ GameService, GameFacade ],
    };
  }
}
