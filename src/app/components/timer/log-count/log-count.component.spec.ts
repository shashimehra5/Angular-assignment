import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCountComponent } from './log-count.component';

describe('LogCountComponent', () => {
  let component: LogCountComponent;
  let fixture: ComponentFixture<LogCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
