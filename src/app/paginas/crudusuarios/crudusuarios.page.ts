import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { Usuarios } from '../../modelos/usuarios';
import { ApiService } from '../../servicios/api.service';


@Component({
  selector: 'app-crudusuarios',
  templateUrl: './crudusuarios.page.html',
  styleUrls: ['./crudusuarios.page.scss'],
})
export class CrudusuariosPage implements OnInit {

  public dataUsuarios : any;
  public data : Usuarios;

  public codigoUsuario : Number;
  public tipo : String;

  public error : Boolean;
  public activo : Boolean;
  public ID =null;
  public EMAIL =null;
  public TYPE =null;
  
  constructor(private apiService : ApiService,private activeRoute: ActivatedRoute, public navCtrl: NavController) { this.data = new Usuarios(); }
  ngOnInit() {
    this.loadUsuarios();
  }
  
  loadUsuarios(){
    //Cargar de la API  todos los usuarios en el Select de Usuarios
    this.apiService.getAll().subscribe( response => {
      this.dataUsuarios = response;
    })
  }

  getData(){
    //Cargar de la API la informacion de un usuario en particular
    //this.popUpMensaje('Cargando Usuario: '+this.codigoUsuario);
    this.apiService.getItem(this.codigoUsuario).subscribe( response => {
      if(response.TYPE != 0)
        this.data = response;
        /*if(response.active == 0)
          this.activo = false
        else
          this.activo = true*/
    });
  }

  createUsuario(){
    //Crear usuario
    //Error si ya existe o no puede ser creado
    this.popUpMensaje('Creando Usuario');
    this.error = false;
    this.checkFields("");
    if(this.error == false){
      if( this.tipo == "Usuario")
        this.data.TYPE = 2;
      if( this.tipo == "Administrador")
        this.data.TYPE = 1;
      this.apiService.createItem(this.data).subscribe();
    }
  }

  modifyUsuario(){
    //Modificar usuario seleccionado
    //Error si no se ha cargado uno
	
    this.popUpMensaje('Modificando Usuario');
	    this.error = false;
    this.checkFields("");
    if(this.error == false){
    if( this.tipo == "Usuario")
      this.data.TYPE = 2;
    if( this.tipo == "Administrador")
      this.data.TYPE = 1;
    this.apiService.updateItem(this.data.ID,this.data).subscribe();
	}
  }

  deleteUsuario(){
    //Dar de baja a usuario
    //Error si no se ha cargado uno
    this.popUpMensaje('Dando de Baja a Usuario');
    //this.data.active = 0;
    this.apiService.updateItem(this.data.ID,this.data).subscribe();
	
  }

  reactivateUsuario(){
    //reactivar usuario
    //Error si no se ha cargado uno
    this.popUpMensaje('Reactivando Usuario');
    //this.data.active = 1;
    this.apiService.updateItem(this.data.ID,this.data).subscribe();
	
  }

  checkFields(mensajeDeError){
	  
    //AnIDar en mensajeDeError, todos los campos vacios
    if(!this.data.ID || this.data.ID.toString().length == 0 || this.data.ID != 0){
      mensajeDeError = mensajeDeError + "ID vacio o debe ser 0.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }
	
	    if(!this.data.EMAIL || this.data.EMAIL.length == 0){
      mensajeDeError = mensajeDeError + "Nombre de Usuario vacio.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }

	
			    if(!this.data.EMAIL||  this.data.EMAIL.length == 0){
      mensajeDeError = mensajeDeError + "Email vacio.<br>";
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }
	
			    if(!this.data.PASSWORD||  this.data.PASSWORD.length == 0){
      mensajeDeError = mensajeDeError + "PASSWORD vacio.<br>" ; 
      this.error = true;
      this.popUpMensaje(mensajeDeError);
    }
     if(!this.data.TYPE||  this.data.TYPE.toString().length == 0){
      mensajeDeError = mensajeDeError + "Tipo vacio.<br>" ; 
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

}
