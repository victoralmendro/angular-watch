class WatchUtils{
    static outputTime(time: number): string{
        return (time < 10) ? "0"+time.toString() : time.toString();
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
    private time: string = "00:00:00.00";
    private hours: number = 0;
    private minutes: number = 0;
    private seconds: number = 0;
    private milliseconds: number = 0;

    private interval;

    constructor(){
    }

    public getTime() : string{
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

        this.time = "00:00:00.00";

        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.milliseconds = 0;
    }

    private addTime(){
        this.time = `${WatchUtils.outputTime(this.hours)}:${WatchUtils.outputTime(this.minutes)}:${WatchUtils.outputTime(this.seconds)}.${WatchUtils.outputTime(this.milliseconds)}`;

        this.milliseconds++;

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

}