import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SongService {
  
  apiURL = "http://localhost:3000/api";

  constructor( private http: HttpClient ) { }

  /**
   * Función que trae las canciones
   * @param songParams  Datos de la canción
   */
  getSongs(){
    return this.http.get(this.apiURL + '/music/').pipe( res => res );
  }

  /**
   * Función que trae canción por nombre
   * @param songParams
   */
  getSongsbyName(nameSong){
    const params = JSON.stringify(nameSong);
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.get(`${this.apiURL}/music/name`, options);
  }

}
