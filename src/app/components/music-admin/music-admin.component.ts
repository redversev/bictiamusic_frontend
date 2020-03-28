import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-admin',
  templateUrl: './music-admin.component.html',
  styleUrls: ['./music-admin.component.css']
})
export class MusicAdminComponent implements OnInit {

  songs = [
    {
      image: 'assets/images/disks/albumCover.jpg',
      songUrl: 'assets/music/BladeOfTheRuinedKing',
      title: 'Blade of the Ruined King',
      author: 'Pentakill',
      album: 'Grasp of the Undying'
    },
    {
      image: 'assets/images/disks/albumCover.jpg',
      songUrl: 'assets/music/Cull',
      title: 'Cull',
      author: 'Pentakill',
      album: 'Grasp of the Undying'
    },
    {
      image: 'assets/images/disks/albumCover.jpg',
      songUrl: 'assets/music/DeadMansPlate',
      title: 'Dead Mans Plate',
      author: 'Pentakill',
      album: 'Grasp of the Undying'
    },
    {
      image: 'assets/images/disks/albumCover.jpg',
      songUrl: 'assets/music/FrozenHeart',
      title: 'Frozen Heart',
      author: 'Pentakill',
      album: 'Grasp of the Undying'
    },
    {
      songUrl: 'assets/music/InfinityEdge',
      title: 'Infinity Edge',
      author: 'Pentakill',
      album: 'Grasp of the Undying'
    },
    {
      image: 'assets/images/disks/albumCover.jpg',
      songUrl: 'assets/music/MortalReminder',
      title: 'Mortal Reminder',
      author: 'Pentakill',
      album: 'Grasp of the Undying'
    }
  ]

  changeSong(urlSong) {
    const video: HTMLMediaElement = document.getElementById('bictiaMusic') as HTMLMediaElement;
    video.setAttribute('src', urlSong + '.mp3');
    video.play();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
