<<<<<<< HEAD
import { Component, OnInit, OnChanges } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> b76a46af92b1465a23cb953c17ddb0797a56ab20
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
      console.log(this.songs);
    });
  }

  getSongByName(){
    let song = JSON.parse(localStorage.getItem('dataSong'));
    if (song !== null) {
      this.songs = song;
      console.log(this.songs);
    }else{
      // alert('Oppps...!!!! Canción no encontrada')
    }
  }

  changeSong(song) {
    const audio: HTMLMediaElement = document.getElementById('bictiaMusic') as HTMLMediaElement;
    audio.setAttribute('src', song.audio + '.mp3');
    this.service.playSong(audio);
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
