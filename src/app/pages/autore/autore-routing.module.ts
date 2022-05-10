import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorePage } from './autore.page';

const routes: Routes = [
  {
    path: '',
    component: AutorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorePageRoutingModule {}
