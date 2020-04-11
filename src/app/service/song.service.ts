import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SongService {

  apiURL = "http://localhost:3000/api";

  constructor( private http: HttpClient ) { }

  /**
   * Función que trae las canciones
   */
  getSongs(){
    return this.http.get(this.apiURL + '/music/').pipe( res => res );
  }

  /**
   * Esta funcion permite reproducir o pausar una cancion y cambia la imagen
   * @param song Como parametro recibe un elemento HTMLMediaElement
   * @constant image La imagen que va a mostrar el icono de play/pause
   */
  playSong(song){
    const image = document.querySelector('#playImage');
    if (song.paused) {
      song.play();
      image.setAttribute('src', './assets/images/iconos/pause.png');
    } else {
      song.pause();
      image.setAttribute('src', './assets/images/iconos/play.png');
    }
  }

  /**
   * Función que trae la canción por nombre
   * @param songParams Datos de la canción
   */
  getSongByName(songParams){
    const params = songParams;
    return this.http.get(
      this.apiURL + '/music/typehead?name=' + params.name
    ).pipe( res => res );
  }

  /**
   * Función que elimina una cacnión por su ID
   * @param idSong ID de la canción a eliminar
   */
  deleteSong(idSong){
    const params = idSong._id;
    return this.http.delete(
      this.apiURL + '/music/delete/' + params
    )
  }
}
