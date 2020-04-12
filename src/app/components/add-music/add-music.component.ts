import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/song';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { SongService } from '../../service/song.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})

export class AddMusicComponent implements OnInit {
  
  public song: Song;
  
  photoSelected: string | ArrayBuffer;
  photofile: File;

  musicSelected: string | ArrayBuffer;
  musicfile: File;

  constructor(private songservice: SongService, private router: Router) { }

  ngOnInit(): void {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.photofile = <File>event.target.files[0];
      // Previsualizacion de la imagen
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.photofile);
    }
  }

onMusicSelected(event: HtmlInputEvent): void {
  if (event.target.files && event.target.files[0]) {
    this.musicfile = <File>event.target.files[0];
    const fileName = event.target.files[0].name;
    const reader2 = new FileReader();
    reader2.onload = e => this.musicSelected = reader2.result;
    reader2.readAsDataURL(this.musicfile);
  }
}


  uploadMusic(namesong: HTMLInputElement, nameartist: HTMLInputElement, namedisc: HTMLInputElement): boolean {
    /*console.log(namesong.value);
    console.log(nameartist.value);
    console.log(namedisc.value);
    console.log(this.photofile);
    console.log(this.musicfile);*/
    this.songservice.creteSong(namesong.value, nameartist.value, namedisc.value, this.photofile, this.musicfile)
      .subscribe(res => console.log(res), err => console.log(err))
    return false;
  }
}
