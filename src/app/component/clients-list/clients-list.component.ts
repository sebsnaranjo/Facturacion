import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Clientes } from 'src/app/domain/clientes';
import { ClientesService } from 'src/app/service/clientes.service';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import CustomStore from 'devextreme/data/custom_store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
  providers: [ClientesService]
})
export class ClientsListComponent implements OnInit {

  public clientes: Clientes[] = [];
  public dataSource: CustomStore;
  public subClientes!: Subscription;

  constructor(public clientesService: ClientesService, private router:Router) {
    let serviceURL = "https://localhost:44304/api/Clientes";
    this.dataSource = createStore({
      key: "ID",
      loadUrl: serviceURL,
      insertUrl: serviceURL,
      updateUrl: "https://localhost:44304/api/Clientes/{ID}",
      deleteUrl: serviceURL
    })
  }

  ngOnInit(): void {
    /* this.getAll(); */
  }

  public redirect(){
    this.router.navigate(['/agregar-clientes']);
  }

/*   getAll(){
    this.subClientes = this.clientesService.getAll().subscribe(data => {
      this.clientes = data;
    });
  } */

}
