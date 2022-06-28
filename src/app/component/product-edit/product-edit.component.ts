import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/domain/productos';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public id:number = 0;

  public producto!: Productos;
  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(public productoService: ProductoService,
    private router:Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.findById();
  }

  public findById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);
    
    this.productoService.getById(this.id).subscribe(data => {
      this.producto = data;
    });
  }

  public edit(){
    this.productoService.edit(this.producto).subscribe(data => {
      this.router.navigate(['/lista-productos']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'Ah ocurrido un error, intentelo de nuevo.';
      this.type = 'danger';
    });
  }
}
