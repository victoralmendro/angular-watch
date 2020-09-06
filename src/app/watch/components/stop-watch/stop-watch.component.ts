import { Component, OnInit, ViewChild } from '@angular/core';
import { StopWatch, WatchUtils } from '../../watch';
import { MatTable } from '@angular/material/table';
import { StopWatchLap } from '../../model/StopWatchLap';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {
  stopWatch: StopWatch;
  displayedColumns: string[] = ['lap', 'elapsedTime', 'timeText'];
  laps: StopWatchLap[];
  
  canStart = true;
  canPause = false;
  canStop = false;
  canLap = false;

  @ViewChild(MatTable) lapsTable: MatTable<any>;

  constructor() {
    this.laps = [];
    this.stopWatch = new StopWatch();
  }

  ngOnInit(): void {
  }

  getTime(onlyMilliseconds = false){
    var time = this.stopWatch.getTimeText();

    if(onlyMilliseconds)
      return time.substr(8, 3);
    else
      return time.substr(0, 8);
  }

  start(){
    this.canStart = false;
    this.canPause = true;
    this.canStop = false;
    this.canLap = true;

    this.stopWatch.start();
  }

  pause(){
    this.canStart = true;
    this.canPause = false;
    this.canStop = true;
    this.canLap = false;

    this.stopWatch.pause();
  }

  stop(){
    this.canStart = true;
    this.canPause = false;
    this.canStop = false;
    this.canLap = false;

    this.laps = [];

    this.stopWatch.stop();
  }

  lap(){
    var lapsLength = this.laps.length;
    var lap = lapsLength + 1;
    var time = this.stopWatch.getTime();

    var elapsedTime = this.stopWatch.getTimeText();
    if(lapsLength > 0){
      elapsedTime = WatchUtils.millisecondsToFormattedTime(time - this.laps[0].time);
    }

    this.laps.unshift({
      lap: lap,
      elapsedTime: elapsedTime,
      timeText: this.stopWatch.getTimeText(),
      time: time
    });

    this.lapsTable.renderRows();
  }

}
