import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListadoInventarioComponent } from './paginas/listado-inventario/listado-inventario.component';
import { ListadoUsuariosComponent } from './paginas/listado-usuarios/listado-usuarios.component';
import { HomeComponent } from './paginas/home/home.component';
import { AccesoComponent } from './paginas/acceso/acceso.component';

const routes: Routes = [
  { path: 'acceso', component: AccesoComponent },
  { path: 'home/:tipo', component: HomeComponent },
  {
    path: 'crudusuarios',
    loadChildren: () => import('./paginas/crudusuarios/crudusuarios.module').then( m => m.CrudusuariosPageModule)
  },
  {
    path: 'crudproductos',
    loadChildren: () => import('./paginas/crudproductos/crudproductos.module').then( m => m.CrudproductosPageModule)
  },
  { path: 'products-list', component: ListadoInventarioComponent },
  { path: 'users-list', component: ListadoUsuariosComponent },
  { path: '', redirectTo: '/acceso', pathMatch: 'full' },
  { path: '**', redirectTo: '/acceso', pathMatch: 'full' }
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
