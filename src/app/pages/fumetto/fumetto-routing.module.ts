import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FumettoPage } from './fumetto.page';

const routes: Routes = [
  {
    path: '',
    component: FumettoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FumettoPageRoutingModule {}
