import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathmaticsComponent } from './mathmatics.component';

describe('MathmaticsComponent', () => {
  let component: MathmaticsComponent;
  let fixture: ComponentFixture<MathmaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathmaticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathmaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
