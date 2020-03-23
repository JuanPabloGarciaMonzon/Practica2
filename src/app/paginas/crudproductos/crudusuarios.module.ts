import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudproductosRoutingModule } from './crudproductos-routing.module';

import { CrudproductosPage } from './crudproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudproductosRoutingModule,
  ],
  declarations: [CrudproductosPage]
})
export class CrudusuariosModule {}
