import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clientes } from '../domain/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  public url: string;

  constructor(public httpClient: HttpClient) { 
    this.url = environment.apiUrl + '/Clientes/';
  }

/*   public getAll():Observable<any[]>{
    return this.httpClient.get<any[]>(this.url);
  } */

  public save(cliente: Clientes): Observable<any> {
    return this.httpClient.post(this.url, cliente)
  }
}
