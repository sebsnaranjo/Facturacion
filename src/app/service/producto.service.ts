import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../domain/productos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.apiUrl + '/Producto/';
  }

  public getAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get(this.url + id);
  }

  public save(producto: Productos): Observable<any> {
    return this.httpClient.post(this.url, producto)
  }

  public edit(producto: Productos): Observable<any> {
    return this.httpClient.put(this.url + producto.ID, producto)
  }

  public delete(id: number) {
    return this.httpClient.delete(this.url + id);
  }
}
