import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/song';
import { User } from '../../models/user';
import { SongService } from '../../service/song.service';

@Component({
  selector: 'app-canciones-favoritas',
  templateUrl: './canciones-favoritas.component.html',
  styleUrls: ['./canciones-favoritas.component.css']
})
export class CancionesFavoritasComponent implements OnInit {

  public user: User;
  
  constructor(public service: SongService) {
  	this.user = new User();
  }

  ngOnInit(): void {
  	this.getFavSongs() 
  }

	getFavSongs() {
  	const user = JSON.parse(localStorage.getItem('user'));
    this.service.getFavoriteSongs(user._id).subscribe((res: any) => {
      switch (res.statusCode) {
        case 400:
          alert('No hay canciones registradas');
          break;
        case 200:
          console.log('Listado de canciones');
          this.user.favoriteSongs = res.user.favoriteSongs;
          console.log(this.user.favoriteSongs)
          break;
        default:
          alert('Error de conexión');
          break;
      }
    });
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
