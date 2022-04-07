import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategryComponent } from './categry.component';

describe('CategryComponent', () => {
  let component: CategryComponent;
  let fixture: ComponentFixture<CategryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
