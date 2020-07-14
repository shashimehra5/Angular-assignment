import { Component, OnInit } from '@angular/core';
import { Ticks, Counter } from '../../types/counter.model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  parentData: any;
  pause: boolean = false;
  counterStatus: string[] = [];
  counterTicks: Ticks;
  constructor() { }

  ngOnInit(): void {
  }

  pauseFromChild (value) {
    this.pause = value && true;
  }

  logCounterInfo (statusObj: Counter) {
    this.counterStatus.push(statusObj.status);
    this.counterTicks = statusObj.ticks;
    console.log('parent | ', this.counterStatus, this.counterTicks);
  }

}
