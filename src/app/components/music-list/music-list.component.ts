import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/song';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  public songs: Song;

  constructor(private service: SongService) {
    console.log(this.songs);
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

  changeSong(song) {
    const video: HTMLMediaElement = document.getElementById('bictiaMusic') as HTMLMediaElement;
    video.setAttribute('src', urlSong + '.mp3');
    video.play();
  }

}
