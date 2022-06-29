import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { ProductoService } from './service/producto.service';
import { ProductSaveComponent } from './component/product-save/product-save.component';
import { FormsModule } from '@angular/forms';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductDeleteComponent } from './component/product-delete/product-delete.component';
import { DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { ClientsListComponent } from './component/clients-list/clients-list.component';
import { ClientesService } from './service/clientes.service';
import { ClientsSaveComponent } from './component/clients-save/clients-save.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductSaveComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ClientsListComponent,
    ClientsSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DevExtremeModule,
    DxDataGridModule
  ],
  providers: [
    ProductoService,
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
