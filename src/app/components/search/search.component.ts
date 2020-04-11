import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/song';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public song: Song;

  constructor( private service: SongService ) {
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
          alert('Canción encontrada');
          this.song = res.songs;
          localStorage.setItem('dataSong', JSON.stringify( res.songs ));
          break;
        default:
          alert('Error de conexión!');
          break;
      }
    });
  }
}
