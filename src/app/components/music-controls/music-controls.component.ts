import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-controls',
  templateUrl: './music-controls.component.html',
  styleUrls: ['./music-controls.component.css']
})
export class MusicControlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pausarCancion() {
    const audio: HTMLMediaElement = document.querySelector('#bictiaMusic') as HTMLMediaElement;
    const timer = document.querySelector('#time');
    if (audio.paused) {
      audio.play();
      setInterval(() => {
        let time = Math.round(audio.currentTime);
        timer.textContent = this.convertTime(time);
      }, 1000);
    } else {
      audio.pause();
    }
  }

  convertTime(secs) {
    let min: Number = Math.floor(secs / 60);
    let sec: Number = secs % 60;
    let cero = (sec < 10) ? '0' : '';
    return (`${min}:${cero}${sec}`)
  }
}
