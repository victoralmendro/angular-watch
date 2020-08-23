import { Component, OnInit } from '@angular/core';
import { Watch } from '../../watch';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  watch: Watch;
  showStopWatch: boolean = false;

  frmStopWatch: FormGroup;

  constructor() {
    this.watch = new Watch(12,55,33);

    this.frmStopWatch = new FormGroup({
        hours: new FormControl("", [Validators.pattern(/0-9/)]), 
        minutes: new FormControl("", [Validators.pattern(/99/)]),
        seconds: new FormControl("", [Validators.pattern(/99/)])
    });
  }

  ngOnInit(): void {
  }

  onTimeClick(){
    this.showStopWatch = false;
  }

  setTime(){
    this.watch.setTime(
      this.frmStopWatch.get("hours").value,
      this.frmStopWatch.get("minutes").value,
      this.frmStopWatch.get("seconds").value
    )
    
    this.showStopWatch = true;
  }

}
