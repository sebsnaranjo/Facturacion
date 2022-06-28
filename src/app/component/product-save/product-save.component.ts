import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app/domain/productos';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styleUrls: ['./product-save.component.css']
})
export class ProductSaveComponent implements OnInit {

  public producto!: Productos;
  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public productoService: ProductoService,
    private router:Router) { }

  ngOnInit(): void {
    this.producto = new Productos(0, '', 0, 0);
  }

  public save(){

    console.log(this.producto);

    this.productoService.save(this.producto).subscribe(data => {
      this.router.navigate(['/lista-productos']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'Ah ocurrido un error, intentelo de nuevo.';
      this.type = 'danger';
    });
  }

}
