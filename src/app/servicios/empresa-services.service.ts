import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuarios} from '../modelos/usuarios';



@Injectable({
  providedIn: 'root'
})
export class EmpresaServicesService {

  private  url: string; 
  
  constructor(private http: HttpClient) { }

  obtenerdatos_Usuarios(){
    //this.url ="http://3.20.104.181:8099/api/usuarios?filter[where][id][gt]=1";
	this.url ="http://ec2-3-12-241-61.us-east-2.compute.amazonaws.com:8099/api/usuarios?filter[where][EMAIL]=admin@root.com";
    return this.http.get<Usuarios>(this.url).pipe();

  }
  obtenerdatos_Usuarios_para_login(user){
   // this.url ="http://3.20.104.181:8099/api/usuarios?filter[where][user_name]="+user;
   this.url ="http://ec2-3-12-241-61.us-east-2.compute.amazonaws.com:8099/api/usuarios?filter[where][EMAIL]="+user;
    return this.http.get<Usuarios>(this.url).pipe();

  }


}
