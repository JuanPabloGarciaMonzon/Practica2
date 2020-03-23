import { Component,OnInit} from '@angular/core';
import { NavController} from '@ionic/angular';
import {Usuarios} from '../../modelos/usuarios';
import {EmpresaServicesService} from '../../servicios/empresa-services.service';
import {Observable} from 'rxjs';
// import fetch from 'node-fetch';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public password : string;
public user : string;
result_user : Observable<Usuarios>;
  constructor(public navCtrl: NavController,private serv :EmpresaServicesService) { 

    
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
      this.result_user.forEach(element => {
        for (let key in element) {
          console.log(element[key].EMAIL);
          
            if(element[key].password == this.password){
  
              if(element[key].active==0){ // usuario inanctivo
                this.error ="El usuario no se encuentra activo";
                return;
              }else{
  
                this.error="";

                console.log("------------ Entroooo")
                this.navCtrl.navigateForward(["/crudusuarios",element[key].id,element[key].EMAIL,element[key].TYPE]);
              return;
            }
  
            }
          
        }
        
     
      });
      this.error ="Usuario o Contraseña incorrecata";
  }
  
}
