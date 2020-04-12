import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/song';
import { SongService } from '../../service/song.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   public song: Song;

  constructor( private service: SongService, private router: Router ) {
    this.song = new Song();
  }

  ngOnInit(): void {
  }

  getSongByName(){
    this.service.getSongByName(this.song).subscribe( (res: any) => {
      switch ( res.statusCode ) {
        case 400:
          alert('Canción no encontrada');
          break;
        case 200:
          this.song = res.songs;
          localStorage.setItem('dataSong', JSON.stringify( res.songs ));
          location.reload();
          Swal.fire({
            icon: 'success',
            title: 'Canción encontrada',
            text: 'La canción ha sido encontrada exitosamente'
          })
          this.router.navigate(['musicSearch']);
          break;
        default:
          alert('Error de conexión!');
          break;
      }
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: 'La canción no existe en nuestro repertorio',
        text: 'La canción no ha sido encontrada!'
      })
    });
  }
}
