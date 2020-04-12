import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SongService {
  
  apiURL = "http://localhost:3000/api";
  private _token = JSON.parse(localStorage.getItem('token'));


  constructor( private http: HttpClient ) { }

  /**
   * Función que trae las canciones
   * @param songParams  Datos de la canción
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
   * Función para agregar cancion en la base de datos por parte del administrador
   * @param namesong parametro nombre de la cancion
   * @param nameartist parametro nombre del artista
   * @param namedisc parametro nombre del disco
   * @param photofile parametro nombre de la imagen
   * @param musicFile parametro nombre del archivo de musica
   */

  
  createSong(namesong: string, nameartist: string, namedisc: string, photofile: File, musicFile: File){
    const fd = new FormData();
    const options = { 
      headers: new HttpHeaders({ "Content-Type": "application/json", "token": this._token })
  };
    fd.append('name', namesong);
    fd.append('artist', nameartist);
    fd.append('discName', namedisc);
    fd.append('urlImage', photofile);
    fd.append('audio', musicFile);
    return this.http.post(`${this.apiURL}/music/create`, fd, options
      ).pipe(res => res);
  }

/*
createSong(body, imageFile, audioFile) {
  const createAt = new Date()
  const text = JSON.stringify(body);
  const file = new FormData();
  const options = { 
    headers: new HttpHeaders({ "Content-Type": "application/json", "token": this._token })
};
  file.append('body', text);
  file.append('audio', audioFile);
  file.append('image', imageFile);
  return this.http.post(`${this.apiURL}/music/create`,
      file, options
  ).pipe(res => res);
}
  */
}
