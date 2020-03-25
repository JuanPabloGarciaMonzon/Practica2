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

  constructor(private router:Router, public serv:EmpresaServicesService) { }

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
          let type = element[key].TYPE;
          if(type == 1)
            this.router.navigate(['/home-admin']);
          else
            this.router.navigate(['/home']);
        }          
        else{
          this.error ="Contraseña o Usuario incorrecta";
          alert(this.error);
        }        
      }  
    });
    
  }
}
