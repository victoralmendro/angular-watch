export class WatchUtils{
    static outputTime(time: number): string{
        return (time < 10) ? "0"+time.toString() : time.toString();
    }

    public static millisecondsToFormattedTime(ms: number): string{
        var hours = (ms / 6000000).toFixed(0);
        hours = WatchUtils.outputTime(parseInt(hours));

        var minutes = (ms / 60000).toFixed(0);
        minutes = WatchUtils.outputTime(parseInt(minutes));

        var seconds = (ms / 1000).toFixed(0);
        seconds = WatchUtils.outputTime(parseInt(seconds));

        var milliseconds = (ms).toString().substr(0,2);
        milliseconds = WatchUtils.outputTime(parseInt(milliseconds));

        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }
}

export class Watch{
    constructor(){}

    public getComputerTime(){
        var time = new Date();
        
        var h = WatchUtils.outputTime(time.getHours());
        var m = WatchUtils.outputTime(time.getMinutes());
        var s = WatchUtils.outputTime(time.getSeconds());

        return `${h}:${m}:${s}`; 
    }
}

export class StopWatch{
    private timeText: string = "00:00:00.00";
    private hours: number = 0;
    private minutes: number = 0;
    private seconds: number = 0;
    private milliseconds: number = 0;

    private time: number = 1;

    private interval;

    constructor(){
    }

    public getTimeText() : string{
        return this.timeText;
    }    

    public getTime() : number{
        return this.time;
    }

    public start(){
        this.interval = setInterval(()=>{this.addTime()}, 10);
    }

    public pause(){
        clearInterval(this.interval);
    }

    public stop(){
        clearInterval(this.interval);

        this.timeText = "00:00:00.00";

        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.milliseconds = 0;
    }

    private addTime(){
        this.timeText = `${WatchUtils.outputTime(this.hours)}:${WatchUtils.outputTime(this.minutes)}:${WatchUtils.outputTime(this.seconds)}.${WatchUtils.outputTime(this.milliseconds)}`;

        this.milliseconds++;
        this.time += 10;

        if(this.milliseconds == 100){
            this.milliseconds = 0;
            this.seconds++;
        }

        if(this.seconds == 60){
            this.seconds=0;
            this.minutes++;
        }

        if(this.minutes == 60){
            this.minutes=0;
            this.hours++;
        }
    }
}

export class Timer{
    private timeText: string = "00:00:00";
    private hours: number = 0;
    private minutes: number = 0;
    private seconds: number = 0;

    private initialHours: number = 0;
    private initialMinutes: number = 0;
    private initialSeconds: number = 0;

    private interval;

    constructor(hours: number, minutes: number, seconds: number){
        this.initialHours = hours;
        this.initialMinutes = minutes;
        this.initialSeconds = seconds;

        this.setTime(hours, minutes, seconds);
    }

    public setTime(hours: number, minutes: number, seconds: number){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;

        this.timeText = `${WatchUtils.outputTime(hours)}:${WatchUtils.outputTime(minutes)}:${WatchUtils.outputTime(seconds)}`;
    }

    public getTime() : string{
        return this.timeText;
    }    

    public start(){
        this.interval = setInterval(()=>{this.removeTime()}, 1000);
    }

    public pause(){
        clearInterval(this.interval);
    }

    public stop(){
        clearInterval(this.interval);

        this.timeText = `${WatchUtils.outputTime(this.initialHours)}:${WatchUtils.outputTime(this.initialMinutes)}:${WatchUtils.outputTime(this.initialSeconds)}`;

        this.setTime(0,0,0);
    }

    private removeTime(){
        this.timeText = `${WatchUtils.outputTime(this.hours)}:${WatchUtils.outputTime(this.minutes)}:${WatchUtils.outputTime(this.seconds)}`;

        this.seconds--;

        if(this.seconds == 0 && this.minutes > 0){
            this.seconds=59;
            this.minutes--;
        }

        if(this.minutes == 0 && this.hours > 0){
            this.minutes=59;
            this.hours--;
        }

        if(this.hours == 0 && this.minutes == 0 && this.seconds <= -1){
            this.stop();
        }
    }
}