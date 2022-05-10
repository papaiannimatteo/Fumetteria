import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtentePage } from './utente.page';

const routes: Routes = [
  {
    path: '',
    component: UtentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtentePageRoutingModule {}
