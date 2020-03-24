import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaServicesService } from 'src/app/servicios/empresa-services.service';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/app/modelos/usuarios';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  constructor(private router:Router, private serv:EmpresaServicesService) { }

  public username:String;
  public password:String;
  //-----------------------
  result_user:Observable<Usuarios>;
  error = "";

  ngOnInit(){ }

  OnLogin(event:Event){
    event.preventDefault();
    //--------------------------------
    this.error="";
    this.result_user = this.serv.obtenerdatos_Usuarios_para_login(this.username);

    this.result_user.forEach(element => {

      for (let key in element) {
        if(element[key].PASSWORD == this.password){ 
          this.router.navigate(['/home',element[key].TYPE]);
        }          
        else{
          this.error ="Contraseña o Usuario incorrecta";
          alert(this.error);
        }        
      }  
    });
    
  }
}
