export class Watch{
    private hours: number;
    private minutes: number;
    private seconds: number;
    private time: number = 0;

    constructor(hours: number, minutes: number, seconds: number){
        this.setTime(hours, minutes, seconds);
    }

    public setTime(hours: number, minutes: number, seconds: number){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;

        this.time = hours * 3600;
        this.time += minutes * 60;
        this.time += seconds;
    }

    public getComputerTime(){
        var time = new Date();
        
        var h = time.getHours();
        var hf = (h < 10) ? "0"+h : h;

        var m = time.getMinutes();
        var mf = (m < 10) ? "0"+m : m;

        var s = time.getSeconds();
        var sf = (s < 10) ? "0"+s : s;

        return `${hf}:${mf}:${sf}`; 
    }

    public getTime(){
        var h: string = (this.hours < 10) ? "0"+this.hours.toString() : this.hours.toString();
        var m: string = (this.minutes < 10) ? "0"+this.minutes.toString() : this.minutes.toString();
        var s: string = (this.seconds < 10) ? "0"+this.seconds.toString() : this.seconds.toString();

        return `${h}:${m}:${s}`;
    }

    public addSeconds(value: number){
        this.time += value;

        var hours = this.time / 3600;
        this.hours = parseInt(hours.toString());

        var minutes = (this.time % 3600) / 60;
        this.minutes = parseInt(minutes.toString());

        var seconds = this.time % 60;
        this.seconds = parseInt(seconds.toString());
    }
}