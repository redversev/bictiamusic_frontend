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

  getSongs() {
    this.service.getSongs().subscribe((res: any) => {
      console.log(res);
      switch (res.statusCode) {
        case 400:
          alert('No hay canciones registradas');
          break;
        case 200:
          console.log('Listado de canciones');
          this.songs = res.music;
          break;
        default:
          alert('Error de conexión');
          break;
      }
      console.log(this.songs);
    });
  }

  changeSong(song) {
    // Esta comentado ya que el audio no se esta guardando en la BD y produce error
    // const audio: HTMLMediaElement = document.getElementById('bictiaMusic') as HTMLMediaElement;
    // audio.setAttribute('src', song.audio + '.mp3');
    // this.service.playSong(audio);
    document.querySelector('.songName').textContent = song.name;
    document.querySelector('.author').textContent = song.artist;
    document.querySelector('.album').textContent = song.discName;

  }

  addFav(song) {
    const user = JSON.parse(localStorage.getItem('user'));
    this.service.addFavSong(song._id, user._id).subscribe((res: any) => {
      console.log(res);
    });
  }

  delFav() {
    console.log("Eliminar de favoritos");
  }
}
