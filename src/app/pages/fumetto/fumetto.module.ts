import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FumettoPageRoutingModule } from './fumetto-routing.module';

import { FumettoPage } from './fumetto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FumettoPageRoutingModule
  ],
  declarations: [FumettoPage]
})
export class FumettoPageModule {}
