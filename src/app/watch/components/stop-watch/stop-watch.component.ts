import { Component, OnInit } from '@angular/core';
import { StopWatch } from '../../watch';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {
  stopWatch: StopWatch;
  
  canStart = true;
  canPause = false;
  canStop = false;

  constructor() {
    this.stopWatch = new StopWatch();
  }

  ngOnInit(): void {
  }

  getTime(onlyMilliseconds = false){
    var time = this.stopWatch.getTime();

    if(onlyMilliseconds)
      return time.substr(8, 3);
    else
      return time.substr(0, 8);
  }

  start(){
    this.canStart = false;
    this.canPause = true;
    this.canStop = false;

    this.stopWatch.start();
  }

  pause(){
    this.canStart = true;
    this.canPause = false;
    this.canStop = true;

    this.stopWatch.pause();
  }

  stop(){
    this.canStart = true;
    this.canPause = false;
    this.canStop = false;

    this.stopWatch.stop();
  }

}
