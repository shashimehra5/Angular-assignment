import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-stamps',
  templateUrl: './time-stamps.component.html',
  styleUrls: ['./time-stamps.component.scss']
})
export class TimeStampsComponent implements OnInit {
  @Input() counterLog: string[] ;
  constructor() { }

  ngOnInit(): void {
  }

}
