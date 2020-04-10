import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SongService {
  
  apiURL = "http://localhost:3000/api";

  playingSong = {
    _id: "",
    name: "Nombre de la cancion",
    artist: "Nombre del artista",
    discName: "Nombre del disco",
    audio: "./assets/music/MortalReminder.mp3"
  }

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

  changeSong(song) {
    this.playingSong._id = song._id;
    this.playingSong.artist = song.artist;
    this.playingSong.audio = song.audio;
    this.playingSong.discName = song.discName;
    this.playingSong.name = song.name;
  }

  /**
   * Función que trae la canción por nombre
   * @param songParams Datos de la canción
   */
  getSongByName(songParams){
    const params = songParams;
    console.log(params.name);
    //const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.get(
      this.apiURL + '/music/typehead?name=' + params.name
    ).pipe( res => res );
  }

  getFavoriteSongs(userId){
    return this.http.get(`${this.apiURL}/user/favoriteSongs/${userId}`).pipe( res => res );
  }
  
  /**
   * Funcion para añadir canciones a favoritos
   * @param idSong Id de la cancion que se va a añadir como favorita
   * @param userId Id del usuario que la va a añadir
   */
  addFavSong(idSong, userId) {
    const params = JSON.stringify({songId: idSong});
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(
      `${this.apiURL}/user/${userId}`,
      params,
      options
    ).pipe(res => res);
  }
}
