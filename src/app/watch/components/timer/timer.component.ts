import { Component, OnInit } from '@angular/core';
import { Timer } from '../../watch';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timeValidator, TimeType } from '../../validators/HourValidator';
import { error_strings } from 'src/app/errors';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timer: Timer;
  showStopWatch: boolean = false;

  canStart = true;
  canPause = false;
  canStop = false;

  hasStarted = false;

  frmStopWatch: FormGroup;

  constructor(private toastr: ToastrService) {
    this.timer = new Timer(0,0,0);

    this.frmStopWatch = new FormGroup({
        hours: new FormControl("", [Validators.pattern(/^\d*$/), timeValidator(TimeType.HOURS)]), 
        minutes: new FormControl("", [Validators.pattern(/^\d*$/), timeValidator(TimeType.MINUTES)]),
        seconds: new FormControl("", [Validators.pattern(/^\d*$/), timeValidator(TimeType.SECONDS)])
    });
  }

  ngOnInit(): void {
  }

  onTimeClick(){
    this.showStopWatch = false;
  }

  validateInput(): boolean{
    var errorText = "";

    if(!this.frmStopWatch.valid){
      if(this.frmStopWatch.get('hours').errors != null){
        errorText += error_strings.invalid_hours;
      }

      if(this.frmStopWatch.get('minutes').errors != null){
        errorText += error_strings.invalid_minutes;
      }

      if(this.frmStopWatch.get('seconds').errors != null){
        errorText += error_strings.invalid_seconds;
      }
      
      this.toastr.error(errorText, 'Errors');

      return false;
    }

    return true;
  }

  start(){
    if(!this.validateInput())
      return;

    if(!this.hasStarted){
      this.hasStarted = true;
      this.timer.setTime(
        this.frmStopWatch.get("hours").value,
        this.frmStopWatch.get("minutes").value,
        this.frmStopWatch.get("seconds").value
      )
    }
    
    this.showStopWatch = true;

    this.canStart = false;
    this.canPause = true;
    this.canStop = false;

    this.timer.start();
  }

  pause(){
    this.canStart = true;
    this.canPause = false;
    this.canStop = true;

    this.timer.pause();
  }

  stop(){
    this.canStart = true;
    this.canPause = false;
    this.canStop = false;

    this.hasStarted = false;

    this.timer.stop();
    this.onTimeClick();
  }

  getTime(){
    var time = this.timer.getTime();
    
    if(time == "00:00:00")
      this.stop();

    return time;
  }
}
