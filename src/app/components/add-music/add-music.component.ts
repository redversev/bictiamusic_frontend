import { Component, OnInit } from "@angular/core";
import { Song } from "../../models/song";
import { Form } from "@angular/forms";
import { Router } from "@angular/router";
import { SongService } from "../../service/song.service";
import Swal from "sweetalert2";

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: "app-add-music",
  templateUrl: "./add-music.component.html",
  styleUrls: ["./add-music.component.css"],
})
export class AddMusicComponent implements OnInit {
  public song: Song;
  public photoSelected: string | ArrayBuffer;
  public photofile: File;
  public musicSelected: string | ArrayBuffer;
  public musicfile: File;
  constructor(private songservice: SongService, private router: Router) {
    this.song = new Song();
  }

  ngOnInit(): void {}

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.photofile = <File>event.target.files[0];
      // Previsualizacion de la imagen
      const reader = new FileReader();
      reader.onload = (e) => (this.photoSelected = reader.result);
      reader.readAsDataURL(this.photofile);
    }
  }

  onMusicSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.musicfile = <File>event.target.files[0];
      const fileName = event.target.files[0].name;
      const reader2 = new FileReader();
      reader2.onload = (e) => (this.musicSelected = reader2.result);
      reader2.readAsDataURL(this.musicfile);
    }
  }

  uploadMusic() {
    this.songservice
      .createSong(this.song, this.photofile, this.musicfile)
      .subscribe((res: any) => {
        if (res.statusCode === 200) {
          Swal.fire({
            icon: "success",
            text: "canción creada correctamente",
          });
        } else {
          Swal.fire({
            icon: "error",
            text: `Algo malo ha ocurrido ${res.statusCode} , ${res.message}`,
          });
        }
      });
  }
}
