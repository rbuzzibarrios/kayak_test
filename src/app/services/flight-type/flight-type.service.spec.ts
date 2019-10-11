import {TestBed} from '@angular/core/testing';

import {FlightTypeService} from './flight-type.service';

describe('FlightTypeService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: FlightTypeService = TestBed.get(FlightTypeService);
        expect(service).toBeTruthy();
    });
});
