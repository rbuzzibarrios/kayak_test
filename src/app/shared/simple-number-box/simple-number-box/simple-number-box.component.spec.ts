import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleNumberBoxComponent} from './simple-number-box.component';

describe('SimpleNumberBoxComponent', () => {
    let component: SimpleNumberBoxComponent;
    let fixture: ComponentFixture<SimpleNumberBoxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SimpleNumberBoxComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleNumberBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
