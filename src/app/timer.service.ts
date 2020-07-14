import { Ticks, Counter } from "./types/counter.model";

export class TimerService {
    pause: boolean = false;
    counterStatus: string[] = [];
    counterTicks: Ticks;
    counter: number;


    logCounterTimeStamps(statusObj: Counter) {
        this.counterStatus.push(statusObj.status);
    }
    
    logCounterTicks (statusObj: Counter) {
        this.counterTicks = statusObj.ticks;
    }

    passCounterValue(value) {
        if (value) {
            this.counter = value;
        }
        return this.counter;
    }

    onReset() {
        this.counter = 0;
    }
}