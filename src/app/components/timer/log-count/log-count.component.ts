import { Component, OnInit, Input } from '@angular/core';
import { Ticks } from '../../../types/counter.model';

@Component({
  selector: 'app-log-count',
  templateUrl: './log-count.component.html',
  styleUrls: ['./log-count.component.scss']
})
export class LogCountComponent implements OnInit {
  @Input() counterTicks: Ticks ;

  constructor() { }

  ngOnInit(): void {
  }

}
