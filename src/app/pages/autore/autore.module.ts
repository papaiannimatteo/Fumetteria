import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorePageRoutingModule } from './autore-routing.module';

import { AutorePage } from './autore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorePageRoutingModule
  ],
  declarations: [AutorePage]
})
export class AutorePageModule {}
