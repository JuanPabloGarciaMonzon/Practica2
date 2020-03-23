import { Component, OnInit } from '@angular/core';
import { ListadoService } from 'src/app/servicios/listado.service';

@Component({
  selector: 'app-listado-inventario',
  templateUrl: './listado-inventario.component.html',
  styleUrls: ['./listado-inventario.component.css']
})
export class ListadoInventarioComponent implements OnInit {

  products: any = [];

  constructor(private service: ListadoService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => {
        console.log(err)
      }
    )
  }

}
