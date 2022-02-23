import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOutlineComponent } from './head-outline.component';

describe('HeadOutlineComponent', () => {
  let component: HeadOutlineComponent;
  let fixture: ComponentFixture<HeadOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
