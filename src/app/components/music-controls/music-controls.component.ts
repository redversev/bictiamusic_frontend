import { Component, OnInit } from '@angular/core';
import { SongService } from "../../service/song.service";

@Component({
  selector: 'app-music-controls',
  templateUrl: './music-controls.component.html',
  styleUrls: ['./music-controls.component.css']
})
export class MusicControlsComponent implements OnInit {

  constructor(public service: SongService) {}

  ngOnInit(): void {
    const audio: HTMLMediaElement = document.querySelector('#bictiaMusic') as HTMLMediaElement;
    setInterval( () => { this.updateDuration(audio) }, 1000 );
  }

  currentSong = {
    _id: "this.service.playingSong._id",
    name: "this.service.playingSong.name",
    artist: "this.service.playingSong.artist",
    discName: "this.service.playingSong.discName",
    audio: "this.service.playingSong.audio"
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

  playSong(){
    this.service.playSong();
  }

  /**
   * Esta funcion verifica cual es el tiempo actual de la etiqueta audio y llama al decorador
   * @param audio Como parametro recibe la etiqueta audio que tiene que tener el tipo HTMLMediaElement
   * @constant duracion Esta variable almacena la etiqueta de tiempo, la cual se va a mostrar al usuario
   * @var tiempo audio.currentTime nos devuelve la duracion como un flotante, lo aproximo a un entero
   */
  updateDuration(audio){
    if(audio.currentTime != 0){
      const duracion = document.querySelector('#time');
      let tiempo = Math.round(audio.currentTime);
      duracion.textContent = this.convertTime(tiempo);
    }
  }

  /**
   * Esta funcion toma los segundos y lo convierte al formato min:sec
   * @param secs Los segundos de la cancion como entero
   * @var deco Estos son decoradores verifican que min y sec tengan dos digitos, si no los tienen agrega un 0
   */
  convertTime(secs) {
    let min: Number = Math.floor(secs / 60);
    let sec: Number = secs % 60;
    let deco1 = (min < 10) ? '0' : '';
    let deco2 = (sec < 10) ? '0' : '';
    return (`${deco1}${min}:${deco2}${sec}`)
  }
}
