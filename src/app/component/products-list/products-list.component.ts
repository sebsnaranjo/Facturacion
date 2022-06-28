import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Productos } from 'src/app/domain/productos';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  public productos: Productos[] = [];
  public subProductos!: Subscription;

  constructor(public productoService: ProductoService) { }

  ngOnDestroy(): void {
    this.subProductos.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.subProductos = this.productoService.getAll().subscribe(data => {
      this.productos = data;
    });
  }

}
