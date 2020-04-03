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
    this.songs = new Song();
  }

  ngOnInit(): void {
    console.log(this.songs);
    this.getSongs();
  }

  getSongs(){
    this.service.getSongs().subscribe( (res: any) => {
      console.log(res);
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


  constructor(private service: SongService) { }

  ngOnInit(): void {
  }

  changeSong(song) {
    const audio: HTMLMediaElement = document.getElementById('bictiaMusic') as HTMLMediaElement;
    audio.setAttribute('src', song.songUrl + '.mp3');
    this.service.playSong(audio);
    document.querySelector('.songName').textContent = song.title;
    document.querySelector('.author').textContent = song.author
    document.querySelector('.album').textContent = song.album

  }

}
