import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/domain/clientes';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-clients-save',
  templateUrl: './clients-save.component.html',
  styleUrls: ['./clients-save.component.css']
})
export class ClientsSaveComponent implements OnInit {

  public cliente!: Clientes;
  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public clienteService: ClientesService, private router:Router) { }

  ngOnInit(): void {
    this.cliente = new Clientes(0, '', '', 0, '');
  }

  public save(){

    console.log(this.cliente);

    this.clienteService.save(this.cliente).subscribe(data => {
      this.router.navigate(['/lista-clientes']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'Ah ocurrido un error, intentelo de nuevo.';
      this.type = 'danger';
    });
  }

  public redirect(){
    this.router.navigate(['/lista-clientes']);
  }

}
