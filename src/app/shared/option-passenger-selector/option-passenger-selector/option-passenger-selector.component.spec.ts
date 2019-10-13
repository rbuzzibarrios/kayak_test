import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPassengerSelectorComponent } from './option-passenger-selector.component';

describe('OptionPassengerSelectorComponent', () => {
  let component: OptionPassengerSelectorComponent;
  let fixture: ComponentFixture<OptionPassengerSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionPassengerSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionPassengerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
