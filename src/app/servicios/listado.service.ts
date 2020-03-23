import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  constructor(private http: HttpClient) { }
  
  getUsers(){
    return this.http.get('http://ec2-3-12-241-61.us-east-2.compute.amazonaws.com:8099/api/usuarios');
  }

  getProducts(){
    return this.http.get('http://ec2-3-12-241-61.us-east-2.compute.amazonaws.com:7099/api/productos');
  }

}
