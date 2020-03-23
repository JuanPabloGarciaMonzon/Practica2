import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListadoInventarioComponent } from './paginas/listado-inventario/listado-inventario.component';
import { ListadoUsuariosComponent } from './paginas/listado-usuarios/listado-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./paginas/login.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'crudusuarios/:id/:user/:type',
    loadChildren: () => import('./paginas/crudusuarios/crudusuarios.module').then( m => m.CrudusuariosPageModule)
  },
  {
    path: 'products-list',
    component: ListadoInventarioComponent
  },
  {
    path: 'users-list',
    component: ListadoUsuariosComponent
  }

];

@NgModule({
  imports: [

    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
