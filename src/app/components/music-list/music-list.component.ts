import { Component, OnInit, OnChanges } from "@angular/core";
import { Song } from "../../models/song";
import { SongService } from "../../service/song.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-music-list",
  templateUrl: "./music-list.component.html",
  styleUrls: ["./music-list.component.css"],
})
export class MusicListComponent implements OnInit, OnChanges {
  public songs: Song[];

  constructor(public service: SongService) {}

  ngOnInit(): void {
    this.getSongs();
    this.getSongByName();
  }

  ngOnChanges(): void {
    this.getSongs();
  }

  getSongs() {
    localStorage.removeItem("dataSong");
    this.service.getSongs().subscribe((res: any) => {
      switch (res.statusCode) {
        case 400:
          Swal.fire({
            icon: "error",
            text: "No hay canciones registradas",
          });
          break;
        case 200:
          console.log("Listado de canciones");
          this.songs = res.music;
          break;
        default:
          Swal.fire({
            icon: "error",
            text: "Error de conexión",
          });
          break;
      }
    });
  }

  getSongByName() {
    let song = JSON.parse(localStorage.getItem("dataSong"));
    if (song !== null) {
      this.songs = song;
      console.log(this.songs);
    }
  }

  addFav(song) {
    const user = JSON.parse(localStorage.getItem("user"));
    this.service.addFavSong(song._id, user._id).subscribe((res: any) => {
      console.log(res);
    });
  }

  delFav() {
    console.log("Eliminar de favoritos");
  }
}
