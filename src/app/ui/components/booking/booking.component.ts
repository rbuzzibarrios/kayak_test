import {Component, OnInit} from '@angular/core';
import {SimpleSelectorSettings} from '../../../shared/simple-selector/simple-selector/simple-selector.component';
import {FlightTypeService} from '../../../services/flight-type/flight-type.service';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

    /**
     *  FlightType Selector settings
     */
    flightTypeSelectorSettings = {
        label: 'Flight Types',
        service: this.flightType,
    } as SimpleSelectorSettings;

    /**
     * Travel class Selector settings
     */
    travelClassSelectorSettings = {
        label: 'Flight Types',
        service: this.flightType,
    } as SimpleSelectorSettings;

    constructor(protected flightType: FlightTypeService) {
    }

    ngOnInit() {
    }

}
