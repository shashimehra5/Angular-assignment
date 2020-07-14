import { Component, OnInit, OnDestroy, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Counter } from '../../../types/counter.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy, OnChanges {
  @Input() counter: number;
  @Input() pauseTimer: boolean;
  @Output() logCounter: EventEmitter<Counter> = new EventEmitter();

  private counterSubs: Subscription;
  private intervalFunc;
  private  counterStatus: string;
  private counterTicks = {
    started: 0,
    paused: 0
  }
  constructor() { }

  ngOnChanges () {
    let customObser;
    if(this.counter > 0 && !this.pauseTimer) {
      this.counterTicks.started++;
      this.counterStatus = 'Started at ' + new Date();
      this.logCounter.emit({status: this.counterStatus, ticks: this.counterTicks});
      customObser = Observable.create(observer => {
        clearInterval(this.intervalFunc);
        let count: number = this.counter;
        this.intervalFunc = setInterval(() => {
          observer.next(count);
          count--;
        },1000);
      });
  
      this.counterSubs = customObser.subscribe(data => {
        if(this.counter > 0) {
          this.counter = data;
        } else {
          this.counterSubs.unsubscribe();
        }
      });
    }

    if(this.pauseTimer && this.counter > 0) {
      this.counterStatus = 'Paused at ' + new Date();
      this.counterTicks.paused++;
      this.logCounter.emit({status: this.counterStatus, ticks: this.counterTicks});
      this.counterSubs.unsubscribe();
    }

    if(this.counter === 0) {
      console.log('unsubscribe reset');
      this.counterSubs.unsubscribe();
    }
  }
  
  ngOnInit(): void {
    
  }

  ngOnDestroy () {
    this.counterSubs && this.counterSubs.unsubscribe();
  }

}
