import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeDetailsPage } from './poke-details.page';

const routes: Routes = [
  {
    path: '',
    component: PokeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeDetailsPageRoutingModule {}
