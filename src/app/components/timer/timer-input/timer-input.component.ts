import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.scss']
})
export class TimerInputComponent implements OnInit {
  @Output() inputVal: EventEmitter<number> = new EventEmitter();
  @Output() pauseTimer: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onStartPauseTimer(input: HTMLInputElement) {
    this.pauseTimer.emit(false);
    if (input.value) {
      this.inputVal.emit(+input.value);
      input.value = '';
      this.pauseTimer.emit(false);
    } else {
      this.pauseTimer.emit(true);
    }

  }

  onReset() {
    this.inputVal.emit(0);
    this.pauseTimer.emit(false);
  }
}
