import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/song';

@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.css']
})
export class SearchMusicComponent implements OnInit {

  public songs: Song [];

  constructor() {
   }

  ngOnInit(): void {
    this.songs = JSON.parse(localStorage.getItem('dataSong'));
    console.log(this.songs);
  }

}
