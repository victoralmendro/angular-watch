import { Component, OnInit } from '@angular/core';
import { Watch } from '../../watch';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  watch: Watch;
  time: string;

  constructor() { 
    this.watch = new Watch();
  }

  ngOnInit(): void {
    this.getTime();
  }

  getTime(){
    setInterval(() => {
      this.time = this.watch.getComputerTime();
    }, 1000);
  }

}
