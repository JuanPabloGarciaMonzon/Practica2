import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { Productos } from '../../modelos/productos';
import { ApiService } from '../../servicios/api.service';


@Component({
  selector: 'app-crudusuarios',
  templateUrl: './crudproductos.page.html',
  styleUrls: ['./crudproductos.page.scss'],
})
export class CrudproductosPage implements OnInit {

  public dataProductos : any;
  public datap : Productos;


  public error : Boolean;

  public ID =null;
  // public NAME =null;
  // public DESCRIPTION =null;
  // public PRICE =null;
  constructor(private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { this.datap = new Productos(); }

  ngOnInit() {
    // this.ID=this.activeRoute.snapshot.paramMap.get('ID');
    // this.NAME=this.activeRoute.snapshot.paramMap.get('NAME');
    // this.DESCRIPTION=this.activeRoute.snapshot.paramMap.get('DESCRIPTION');
    // this.PRICE=this.activeRoute.snapshot.paramMap.get('PRICE');


    this.loadProductos();
  }

  loadProductos(){

    this.apiService.getAll().subscribe( response => {
      this.dataProductos = response;
    })
  }

  getData(){


  }

  createProducto(){

    this.popUpMensaje('Creando Producto');
    this.error = false;
    this.checkFields("");console.log(this.error);
    if(this.error == false){

      this.apiService.createItem(this.datap).subscribe();
    }
  }

  modifyProducto(){


    this.popUpMensaje('Modificando Producto');
	    this.error = false;
    this.checkFields("");
    if(this.error == false){

    this.apiService.updateItem(this.datap.ID,this.datap).subscribe();
	}
  }

  deleteProducto(){

    this.popUpMensaje('Eliminar producto');

    this.apiService.updateItem(this.datap.ID,this.datap).subscribe();

  }



  checkFields(mensajeDeError){

    //AnIDar en mensajeDeError, todos los campos vacios
    if(!this.datap.ID || this.datap.ID.toString().length == 0 || this.datap.ID != 0){
      mensajeDeError = mensajeDeError + "ID vacio o debe ser 0.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }

	    if(!this.datap.NAME || this.datap.NAME.length == 0){
      mensajeDeError = mensajeDeError + "Nombre  vacio.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }


			    if(!this.datap.DESCRIPTION||  this.datap.DESCRIPTION.length == 0){
      mensajeDeError = mensajeDeError + "DESCRIPCION vacia.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }

			    if(!this.datap.PRICE||  this.datap.PRICE.length == 0){
      mensajeDeError = mensajeDeError + "PRICE vacio.<br>" ;
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
    this.navCtrl.navigateForward(["/login"]);
  }

}
