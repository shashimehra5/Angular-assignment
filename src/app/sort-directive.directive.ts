import { Directive, ElementRef, Input, Renderer2, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appSortDirective]'
})
export class SortDirectiveDirective implements OnInit {
  @Input() data: any[];
  @Input('sortKey') key: any;
  @Output('sortedData') localDataState: EventEmitter<any[]> = new EventEmitter();
  private toggleSort: boolean = false;
  private clickCount: number = 0;

  constructor (private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit () {
    this.renderer.listen(this.el.nativeElement, 'click', (event) => {
      let parentNode = this.el.nativeElement.parentNode;
      this.clickCount++;
      if(this.clickCount >=3) {
        this.toggleSort = false;
        this.clickCount = 0;
        this.localDataState.emit(this.data);
      } else {
        if (this.data && this.key) {
          let sortedData: any = this.sortArray();
        }
        this.toggleSort = !this.toggleSort;
      }
    })
  }

  sortArray (): Array<any> {
    let tempArray: Array<any> = [...this.data];
    tempArray.sort((a, b) => {
      let aKey = a[this.key];
        let str1: string = a[this.key].toLowerCase();
        let str2: string = b[this.key].toLowerCase();
        if (this.toggleSort) {
          if (str1 > str2) {
            return -1;
          }
          if (str1 < str2) {
            return 1;
          }
        }
        else {
          if (str1 < str2) {
            return -1;
          }
          if (str1 > str2) {
            return 1;
          }
        }
      return 0;
    });
    this.localDataState.emit(tempArray);
    return tempArray;
  }
}
