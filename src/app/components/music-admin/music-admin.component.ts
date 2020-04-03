import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/song';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-music-admin',
  templateUrl: './music-admin.component.html',
  styleUrls: ['./music-admin.component.css']
})
export class MusicAdminComponent implements OnInit {

  public songs: Song;

  constructor( private service: SongService ) {
    this.songs = new Song();
  }

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs(){
    this.service.getSongs().subscribe( (res: any) => {
      switch (res.statusCode) {
        case 400:
          alert('No hay canciones registradas');
          break;
        case 200:
          alert('Listado de canciones');
          this.songs = res.music;
          break;
        default:
          alert('Error de conexión');
          break;
      }
    });
  }

  changeSong(urlSong) {
    const video: HTMLMediaElement = document.getElementById('bictiaMusic') as HTMLMediaElement;
    video.setAttribute('src', urlSong + '.mp3');
    video.play();
  }

}
