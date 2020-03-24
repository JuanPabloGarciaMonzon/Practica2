import { Component,OnInit} from '@angular/core';
import {Usuarios} from '../../modelos/usuarios';
import {EmpresaServicesService} from '../../servicios/empresa-services.service';
import {Observable} from 'rxjs';
import fetch from 'node-fetch';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public password : string;
public user : string;
result_user : Observable<Usuarios>;
  constructor(private serv :EmpresaServicesService,public router : Router) {    
  }
 error="";
  ver_pass:string;
  type_pass:string;
 ngOnInit() {
   this.password="";
   this.user="";
  this.ver_pass="eye";
  this.type_pass="password"

 }
 ver_password(){
   if(this.type_pass=="password"){
     this.ver_pass ="eye-off";
     this.type_pass="text";
   }else{
     this.ver_pass="eye";
     this.type_pass="password"
   }
 }
    presentLoading():void {
      this.error="";
      this.result_user = this.serv.obtenerdatos_Usuarios_para_login(this.user);
	  console.log(JSON.stringify(this.result_user));
      this.result_user.forEach(element => {
        for (let key in element) {
          console.log(element[key].EMAIL);         
            if(element[key].PASSWORD == this.password){ 
                this.error="";

                console.log("------------ Entroooo")
                 //this.navCtrl.navigateForward(["/crudusuarios",element[key].ID,element[key].EMAIL,element[key].TYPE]);
				  this.router.navigate(["/crudusuarios",element[key].ID,element[key].EMAIL,element[key].TYPE]);
              return; 
            }
			
			else{
                this.error ="Contraseña o Usuario incorrecta";
              }
          
        }  
      });
  }   
}
