import { Component, OnInit, OnChanges } from '@angular/core';
import { Song } from '../../models/song';
import { SongService } from '../../service/song.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-music-admin',
  templateUrl: './music-admin.component.html',
  styleUrls: ['./music-admin.component.css']
})
export class MusicAdminComponent implements OnInit, OnChanges {

  public songs: Song[];

  constructor( private service: SongService ) {
  }

  ngOnInit(): void {
    this.getSongs();
  }

  ngOnChanges(): void {
    this.getSongs();
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

  deleteSong(idSong){
    Swal.fire({
      title: '¿Esta seguro que desea eliminar esta canción?',
      text: "Una canción sera eliminada!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar esta canción!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminada!',
          'La cacnión ha sido eliminada!',
          'success'
        )
        this.service.deleteSong(idSong).subscribe( (res: any) => {
          console.log(res);
          switch (res.statusCode) {
            case 400:
              alert('Error al eliminar la canción');
              break;
            case 200:
              console.log('Canción eliminada correctamente!');
              this.getSongs();
              break;
            default:
              alert('Error del servidor');
              break;
          }
        });
      }
    })
  }

}
