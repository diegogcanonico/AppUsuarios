import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionesService {
  private myAppUrl = 'https://localhost:44328/';
  private myApiUrl ='api/usuario/'

  constructor(private http: HttpClient) { }

    guardarUsuario(usuario:any): Observable<any>{
      return this.http.post(this.myAppUrl + this.myApiUrl, usuario );
    }

    actualizarUsuario(id: number, usuario: any): Observable<any> {
      return this.http.put(this.myAppUrl + this.myApiUrl + id, usuario);
    }
  
}
