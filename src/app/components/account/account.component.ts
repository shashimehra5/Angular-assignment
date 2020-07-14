import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  count = 6;
  generator;
  constructor() {
    this.generator = this.infinite();
    document.addEventListener("scroll", this.scrollHandler.bind(this));
  }

  scrollHandler() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.count = this.generator.next().value;
   }
  }

  *infinite() {
    let index = 6;
    while (true) {
        yield index+=2;
    }
  }

  displayValue (num) {
    alert(num);
  }
}
