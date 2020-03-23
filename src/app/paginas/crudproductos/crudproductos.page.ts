import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { Productos } from '../../modelos/productos';
import { ApiService } from '../../servicios/api.service';


@Component({
  selector: 'app-crudproductos',
  templateUrl: './cruduproductos.page.html',
  styleUrls: ['./crudproductos.page.scss'],
})
export class CrudproductosPage implements OnInit {

  public dataProductos : any;
  public data : Productos;

  public codigoProducto : Number;
  //public tipo : String;

  public error : Boolean;
  //public activo : Boolean;
  public ID =null;
  public NAME = null;
  public DESCRIPTION = null;
  public PRICE = null;
  constructor(private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { this.data = new Productos(); }

  ngOnInit() {
    this.ID = this.activeRoute.snapshot.paramMap.get('ID');
    this.NAME = this.activeRoute.snapshot.paramMap.get('NAME');
    this.DESCRIPTION=this.activeRoute.snapshot.paramMap.get('DESCRIPTION');
    this.PRICE = this.activeRoute.snapshot.paramMap.get('PRICE');

    this.loadProductos();
  }

  loadProductos(){

    this.apiService.getAll().subscribe( response => {
      this.dataProductos = response;
    })
  }

  getData2(){


    this.apiService.getproduct(this.codigoProducto).subscribe( response => {

        this.data = response;

    });
  }

  createproduct(){

    this.popUpMensaje('Creando Producto');
    this.error = false;
    this.checkFields("");
    if(this.error == false){
      this.apiService.createproduct(this.data).subscribe();
    }
  }

  modifyproducts(){

    this.popUpMensaje('Modificando Producto');
    this.error = false;
    this.checkFields("");

      this.apiService.updateProduct(this.data.ID,this.data).subscribe();

  }

  deleteproduct(){

    this.popUpMensaje('Dando de Baja producto');

    this.apiService.updateProduct(this.data.ID,this.data).subscribe();

  }



  checkFields(mensajeDeError){

    if(!this.data.ID || this.data.ID.toString().length == 0 || this.data.ID != 0){
      mensajeDeError = mensajeDeError + "ID vacio.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }

    if(!this.data.NAME || this.data.NAME.length == 0){
      mensajeDeError = mensajeDeError + "Nombre de producto vacio.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }


    if(!this.data.DESCRIPTION||  this.data.DESCRIPTION.length == 0){
      mensajeDeError = mensajeDeError + "Descripcion Vacia.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }

    if(!this.data.PRICE||  this.data.PRICE.length == 0){
      mensajeDeError = mensajeDeError + "Precio vacio.<br>" ;
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }

  }

  popUpMensaje(mensaje){
    const loading = document.createElement('ion-loading');
    loading.message = mensaje;
    loading.duration = 1000;
    loading.present();

    document.body.appendChild(loading);
  }

  returnMenu(){
    this.navCtrl.navigateForward(["/login",this.ID,this.NAME,this.PRICE]);
  }

}
