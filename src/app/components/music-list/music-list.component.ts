import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/song';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  public songs: Song[];

  constructor(public service: SongService) {
  }

  ngOnInit(): void {
    this.getSongs();
    this.getSongByName();
  }

  getSongs(){
    this.service.getSongs().subscribe( (res: any) => {
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

  getSongByName(){
    let song = JSON.parse(localStorage.getItem('dataSong'));
    if (song !== null) {
      this.songs = song;
      console.log(this.songs);
    }
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
