import { Component, OnInit } from '@angular/core';
import { SongService } from "../../service/song.service";

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
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
      image: 'assets/images/disks/albumCover.jpg',
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
    },
    {
      image: 'assets/images/disks/albumCover.jpg',
      songUrl: 'assets/music/RapidFirecannon',
      title: 'Rapid Firecannon',
      author: 'Pentakill',
      album: 'Grasp of the Undying'
    },
    {
      image: 'assets/images/disks/albumCover.jpg',
      songUrl: 'assets/music/TearOfTheGoddess',
      title: 'Tear of the Goddess',
      author: 'Pentakill',
      album: 'Grasp of the Undying'
    },
    {

      songUrl: 'assets/music/AhoraTuAdessoTu',
      title: 'Adesso tu',
      author: 'Eros Ramazzotti',
      album: 'Eros e²'
    },
    {
      image: 'assets/images/disks/albumCover.jpg',
      songUrl: 'assets/music/TheBloodthirster',
      title: 'The Bloodthirster',
      author: 'Pentakill',
      album: 'Grasp of the Undying'
    }
  ];

  constructor(private service: SongService) { }

  ngOnInit(): void {
  }

  changeSong(song) {
    const audio: HTMLMediaElement = document.getElementById('bictiaMusic') as HTMLMediaElement;
    audio.setAttribute('src', song.songUrl + '.mp3');
    this.service.playSong(audio);
    document.querySelector('.songName').textContent = song.title;
    document.querySelector('.author').textContent = song.author
    document.querySelector('.album').textContent = song.album
  }

}
