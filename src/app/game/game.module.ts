import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game.routing.module';

import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

import { GameService } from './../providers/game.service';

import { GamePageComponent } from './containers/game-page/game-page.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder,
    GameService
  ],
  declarations: [GamePageComponent]
})
export class GameModule { }
