import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ListadoUsuariosComponent } from './paginas/listado-usuarios/listado-usuarios.component';
import { ListadoInventarioComponent } from './paginas/listado-inventario/listado-inventario.component';
import { ListadoService } from './servicios/listado.service';
import { HomeComponent } from './paginas/home/home.component';
import { AccesoComponent } from './paginas/acceso/acceso.component';
import { AdminUsuariosComponent } from './paginas/admin-usuarios/admin-usuarios.component';
import { AdminProductosComponent } from './paginas/admin-productos/admin-productos.component'

@NgModule({
  declarations: [
    AppComponent, 
    ListadoUsuariosComponent, 
    ListadoInventarioComponent, 
    HomeComponent, AccesoComponent, 
    AdminUsuariosComponent, 
    AdminProductosComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListadoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
