import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchGirlComponent } from './sketch-girl.component';

describe('SketchGirlComponent', () => {
  let component: SketchGirlComponent;
  let fixture: ComponentFixture<SketchGirlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SketchGirlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchGirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
