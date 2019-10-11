import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSelectorComponent } from './simple-selector.component';

describe('SimpleSelectorComponent', () => {
  let component: SimpleSelectorComponent;
  let fixture: ComponentFixture<SimpleSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
