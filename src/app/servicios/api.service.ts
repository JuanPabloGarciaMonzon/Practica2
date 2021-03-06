import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuarios } from '../modelos/usuarios';
import { Productos } from '../modelos/productos';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Path
  base_path = 'http://ec2-3-12-241-61.us-east-2.compute.amazonaws.com:8099/api/usuarios';
  base_path2 = 'http://ec2-3-12-241-61.us-east-2.compute.amazonaws.com:7099/api/productos';

  constructor(private http: HttpClient) { }

  //Opciones
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Error:', error.error.message);
    }else{
      console.error(
        `Codigo de Error: ${error.status}, `+
        `cuerpo del error: ${error.error}`
      );
    }
    return throwError(
      'Algo salio muy mal.'
    );
  };

  getAll() : Observable<Usuarios>{
    return this.http
    .get<Usuarios>(this.base_path)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  getItem(itemID) : Observable<Usuarios>{
    return this.http
    .get<Usuarios>(this.base_path+"/"+itemID)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  createItem(item): Observable<Usuarios>{
    return this.http
    .post<Usuarios>(this.base_path, JSON.stringify(item), this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  updateItem(itemID, item) : Observable<Usuarios>{
    return this.http
    .put<Usuarios>(this.base_path+"/"+itemID, JSON.stringify(item),this.httpOptions)
    .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }



  getAllproducts() : Observable<Productos>{
    return this.http
      .get<Productos>(this.base_path2)
      .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  getproduct(itemID) : Observable<Productos>{
    return this.http
      .get<Productos>(this.base_path2 + "/" + itemID)
      .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  createproduct(item): Observable<Productos>{
    return this.http
      .post<Productos>(this.base_path2, JSON.stringify(item), this.httpOptions)
      .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }

  updateProduct(itemID, item) : Observable<Productos>{
    return this.http
      .put<Productos>(this.base_path2+"/"+itemID, JSON.stringify(item),this.httpOptions)
      .pipe(/*retry(2),*/catchError(this.handleError)/**/)
  }



}

