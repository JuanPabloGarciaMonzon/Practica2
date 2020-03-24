import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudproductosPage } from './crudproductos.page';

const routes: Routes = [
  {
    path: '',
    component: CrudproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudproductosPageRoutingModule {}
