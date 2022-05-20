import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperMarioPage } from './super-mario.page';

const routes: Routes = [
  {
    path: '',
    component: SuperMarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperMarioPageRoutingModule {}
