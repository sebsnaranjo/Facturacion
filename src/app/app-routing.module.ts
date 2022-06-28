import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDeleteComponent } from './component/product-delete/product-delete.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductSaveComponent } from './component/product-save/product-save.component';
import { ProductsListComponent } from './component/products-list/products-list.component';

const routes: Routes = [
  {path: 'lista-productos', component: ProductsListComponent},
  {path: 'agregar-productos', component: ProductSaveComponent},
  {path: 'editar-productos/:id', component: ProductEditComponent},
  {path: 'eliminar-productos/:id', component: ProductDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
