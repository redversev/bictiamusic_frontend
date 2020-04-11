import { Component, OnInit, OnChanges } from '@angular/core';
import { Song } from '../../models/song';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit, OnChanges{

  public songs: Song[];

  constructor(private service: SongService) {
  }

  ngOnInit(): void {
    this.getSongs();
    this.getSongsByName();
  }

  ngOnChanges(): void{
    this.getSongs();
  }

  getSongs(){
    localStorage.removeItem('dataSong');
    this.service.getSongs().subscribe( (res: any) => {
      switch (res.statusCode) {
        case 400:
          alert('No hay canciones registradas');
          break;
        case 200:
          console.log('Listado de canciones');
          this.songs = res.music;
          console.log(this.songs);
          break;
        default:
          alert('Error de conexión');
          break;
      }
    });
  }

  changeSong(song) {
    const audio: HTMLMediaElement = document.getElementById('bictiaMusic') as HTMLMediaElement;
    audio.setAttribute('src', song.audio + '.mp3');
    this.service.playSong(audio);
    document.querySelector('.songName').textContent = song.name;
    document.querySelector('.author').textContent = song.artist;
    document.querySelector('.album').textContent = song.discName;
  }

  getSongsByName(){
    const result = JSON.parse(localStorage.getItem('dataSong'));
    if (result) {
      this.songs = result;
      console.log(this.songs);
    }
  }
}
