import {TestBed} from '@angular/core/testing';

import {TravelClassService} from './travel-class.service';

describe('TravelClassService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TravelClassService = TestBed.get(TravelClassService);
        expect(service).toBeTruthy();
    });
});
