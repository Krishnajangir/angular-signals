import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCompComponent } from './reactive-comp.component';

describe('ReactiveCompComponent', () => {
  let component: ReactiveCompComponent;
  let fixture: ComponentFixture<ReactiveCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveCompComponent]
    });
    fixture = TestBed.createComponent(ReactiveCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
