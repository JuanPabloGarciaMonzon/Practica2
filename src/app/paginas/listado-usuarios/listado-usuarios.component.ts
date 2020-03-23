import { Component, OnInit } from '@angular/core';
import { ListadoService } from 'src/app/servicios/listado.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  users: any = [];

  constructor(private service: ListadoService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => {
        console.log(err)
      }
    )
  }

}
