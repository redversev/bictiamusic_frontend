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

  searchSong(){
  
  }

}
