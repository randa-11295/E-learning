import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribComponent } from './subscrib.component';

describe('SubscribComponent', () => {
  let component: SubscribComponent;
  let fixture: ComponentFixture<SubscribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
