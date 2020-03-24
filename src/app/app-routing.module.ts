import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListadoInventarioComponent } from './paginas/listado-inventario/listado-inventario.component';
import { ListadoUsuariosComponent } from './paginas/listado-usuarios/listado-usuarios.component';
import { HomeComponent } from './paginas/home/home.component';
import { AccesoComponent } from './paginas/acceso/acceso.component';
import { AdminUsuariosComponent } from './paginas/admin-usuarios/admin-usuarios.component';
import { AdminProductosComponent } from './paginas/admin-productos/admin-productos.component';

const routes: Routes = [  
  // {
  //   path: 'login',
  //   loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  // },  
  { path: 'acceso', component: AccesoComponent },  
  { path: 'home/:tipo', component: HomeComponent },
  // {
  //   path: 'crudusuarios/:id/:user/:type',
  //   loadChildren: () => import('./paginas/crudusuarios/crudusuarios.module').then( m => m.CrudusuariosPageModule)
  // },
  { path: 'admin-usuarios', component: AdminUsuariosComponent },
  { path: 'admin-productos/:id/:user/:type', component: AdminProductosComponent },
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
