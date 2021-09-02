import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiScorePageRoutingModule } from './hi-score-routing.module';

import { HiScorePage } from './hi-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiScorePageRoutingModule
  ],
  declarations: [HiScorePage]
})
export class HiScorePageModule {}
