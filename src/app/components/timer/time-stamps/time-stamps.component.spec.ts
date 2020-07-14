import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStampsComponent } from './time-stamps.component';

describe('TimeStampsComponent', () => {
  let component: TimeStampsComponent;
  let fixture: ComponentFixture<TimeStampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeStampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
