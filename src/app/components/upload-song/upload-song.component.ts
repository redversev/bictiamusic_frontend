import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/song';
import { SongService } from '../../service/song.service';

@Component({
    selector: 'app-upload-song',
    templateUrl: './upload-song.component.html',
    styleUrls: ['./upload-song.component.css']
})
export class UploadSongComponent implements OnInit {
    public song: Song;
    public urlImage: File;
    public audio: File;

    constructor(private service: SongService) {
        this.song = new Song();
    }

    ngOnInit(): void {
    }

    createSong() {
        this.service.createSong(this.song, this.urlImage, this.audio)
            .subscribe((res: any) => {
                if (res.statusCode === 200) {
                    alert('canción creada correctamente');
                    console.log(res);
                } else {
                    alert(`Algo malo ha ocurrido ${res.statusCode} , ${res.message}`);
                }
            });
    }
    loadImg(image: any) {
        this.urlImage = image.target.files[0] as File;
    }
    loadSong(song: any) {
        this.audio = song.target.files[0] as File;
    }
}
