import { Component, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('move', [
      state('in', style({ transform: 'rotate(0deg)' })),
      state('out', style({ transform: 'rotate(360deg)' })),
      transition('* => in', [
        animate("5s", keyframes([
          style({ transform: 'rotate(0deg)' }),        
        ]))
      ]),
      transition('* => out', [
        animate("2s", keyframes([
          style({ transform: 'rotate(0deg)' }),
          style({ transform: 'rotate(90deg)' }),
          style({ transform: 'rotate(180deg)' }),
          style({ transform: 'rotate(360deg)' })
        ]))
      ]),
    ]),
  ],
})
export class HomeComponent implements AfterViewInit  {
  state: string = 'in';

  constructor() { }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'out';
    }, 0);
  }
  onEnd(event) {
    this.state = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.state = 'out';
      }, 0);
    }
  }

  rotate() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

}
