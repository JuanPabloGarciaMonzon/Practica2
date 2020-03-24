import { Component, OnInit } from '@angular/core';
import { ListadoService } from 'src/app/servicios/listado.service';

@Component({
  selector: 'app-listado-inventario',
  templateUrl: './listado-inventario.component.html',
  styleUrls: ['./listado-inventario.component.css']
})
export class ListadoInventarioComponent implements OnInit {

  products: any = [];
  error:boolean = false;

  constructor(public service: ListadoService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.service.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => {
        this.error = true;
        console.log(err)
      }
    )
  }

}
