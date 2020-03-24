import { Component, OnInit } from '@angular/core';
import { ListadoService } from 'src/app/servicios/listado.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  users: any = [];
  error: boolean = false;

  constructor(public service: ListadoService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.service.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => {
        this.error = true;
        console.log(err)
      }
    )
  }

}
