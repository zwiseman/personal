import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterBstComponent } from './enter-bst.component';

describe('EnterBstComponent', () => {
  let component: EnterBstComponent;
  let fixture: ComponentFixture<EnterBstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterBstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterBstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
