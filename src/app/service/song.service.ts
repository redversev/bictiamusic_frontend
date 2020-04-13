import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SongService {

  apiURL = "http://localhost:3000/api";
  private _token = JSON.parse(localStorage.getItem('token'));

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
    let headers = new HttpHeaders()
                      .set('token', this._token);
    return this.http.get(this.apiURL + '/music/', {headers}).pipe( res => res );
  }

  /**
   * Esta funcion permite reproducir o pausar una cancion y cambia la imagen
   * @param song Como parametro recibe un elemento HTMLMediaElement
   * @constant image La imagen que va a mostrar el icono de play/pause
   */
  playSong(){
  	const song: HTMLMediaElement = document.querySelector('#bictiaMusic') as HTMLMediaElement
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
  createSong(body, imageFile, audioFile){
    const fd = new FormData();
    const text = JSON.stringify(body);
    fd.append('body', text);
    fd.append('audio', audioFile);
    fd.append('image', imageFile);
    const options = {
      headers: new HttpHeaders({ "token": this._token })
  };
    return this.http.post(`${this.apiURL}/music/create`,
      fd,
      options
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

  changeSong(song) {
    this.playingSong._id = song._id;
    this.playingSong.artist = song.artist;
    this.playingSong.audio = `http://localhost:3000/api/music/audio/${song.audio}`;
    this.playingSong.discName = song.discName;
    this.playingSong.name = song.name;
    this.playSong();
  }

  /**
   * Función que trae la canción por nombre
   * @param songParams Datos de la canción
   */
  getSongByName(songParams){
    const params = songParams;
    let headers = new HttpHeaders()
                      .set('token', this._token);
    return this.http.get(
      this.apiURL + '/music/typehead?name=' + params.name,
      {headers}
    ).pipe( res => res );
  }

  getFavoriteSongs(userId){
    const headers = new HttpHeaders()
                      .set('token', this._token);
    return this.http.get(`${this.apiURL}/user/favoriteSongs/${userId}`, {headers}).pipe( res => res );
  }
  /**
   * Funcion para añadir canciones a favoritos
   * @param idSong Id de la cancion que se va a añadir como favorita
   * @param userId Id del usuario que la va a añadir
   */
  addFavSong(idSong, userId) {
    const params = JSON.stringify({songId: idSong});
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': this._token }) };
    return this.http.put(
      `${this.apiURL}/user/${userId}`,
      params,
      options
    ).pipe(res => res);
  }

  deleteSong(idSong){
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': this._token }) };
    return this.http.delete(
      `${this.apiURL}/music/delete/${idSong}`, options
    )
  }
}
