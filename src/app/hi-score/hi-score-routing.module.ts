import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiScorePage } from './hi-score.page';

const routes: Routes = [
  {
    path: '',
    component: HiScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiScorePageRoutingModule {}
