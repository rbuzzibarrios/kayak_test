import {TestBed} from '@angular/core/testing';

import {PassengerTypeService} from './passenger-type.service';

describe('PassengerTypeService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: PassengerTypeService = TestBed.get(PassengerTypeService);
        expect(service).toBeTruthy();
    });
});
