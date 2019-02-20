import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericBinarySearchComponent } from './generic-binary-search.component';

describe('GenericBinarySearchComponent', () => {
  let component: GenericBinarySearchComponent;
  let fixture: ComponentFixture<GenericBinarySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericBinarySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericBinarySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
