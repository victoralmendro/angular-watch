import { Component, OnInit } from '@angular/core';
import { Watch } from '../../watch';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {
  watch: Watch;
  stopWatch = null;
  
  canStart = true;
  canPause = false;
  canStop = false;

  constructor() {
    this.watch = new Watch(0,0,0);
  }

  ngOnInit(): void {
  }

  start(){
    this.canStart = false;
    this.canPause = true;
    this.canStop = false;

    this.stopWatch = setInterval(()=>{
      this.watch.addSeconds(1)
    }, 1000);
  }

  pause(){
    this.canStart = true;
    this.canPause = false;
    this.canStop = true;

    clearInterval(this.stopWatch);
  }

  stop(){
    this.canStart = true;
    this.canPause = false;
    this.canStop = false;

    clearInterval(this.stopWatch);
    this.watch.setTime(0,0,0);
  }

}
