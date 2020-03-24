import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudproductosPageRoutingModule } from './crudproductos-routing.module';

import { CrudproductosPage } from './crudproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudproductosPageRoutingModule,
  ],
  declarations: [CrudproductosPage]
})
export class CrudproductosPageModule {}
