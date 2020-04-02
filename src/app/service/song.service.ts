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
    getSongs(songParams) {
        return this.http.get(`${this.apiURL} + /music/`).pipe(res => res);
    }
    createSong(songParams) {
        const params = JSON.stringify(songParams);
        const options = {
            headers: new HttpHeaders(
                { 'Content-Type': 'application/json'}
            )
        };
        return this.http.post(`${this.apiURL}/music/create`,
            params,
            options
        ).pipe(res => res);
    }
    uploadAudio(audio,id) {
        const audioFile = new FormData();
        audioFile.append('image', audio);
        return this.http.put(`${this.apiURL}/music/create/upload/audio/${id}`,
            audioFile
        ).pipe(res => res);
    }
    uploadImage(image,id) {
        const imageFile = new FormData();
        imageFile.append('image', image);
        return this.http.put(`${this.apiURL}/music/create/upload/image/${id}`,
            imageFile
        ).pipe(res => res);
    }
}
