import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private myAppUrl = 'https://localhost:44328/';
  private myApiUrl ='api/usuario/'

  
  constructor(private http: HttpClient) { }

  getListaUsuarios(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteUsuario(id: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  
}
