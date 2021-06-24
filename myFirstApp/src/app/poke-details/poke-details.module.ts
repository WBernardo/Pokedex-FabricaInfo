import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokeDetailsPageRoutingModule } from './poke-details-routing.module';

import { PokeDetailsPage } from './poke-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokeDetailsPageRoutingModule
  ],
  declarations: [PokeDetailsPage]
})
export class PokeDetailsPageModule {}
