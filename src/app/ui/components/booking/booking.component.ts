import {Component, OnInit, ViewChild} from '@angular/core';
import {SimpleSelectorSettings} from '../../../shared/simple-selector/simple-selector/simple-selector.component';
import {FlightTypeService} from '../../../services/flight-type/flight-type.service';
import {TravelClassService} from '../../../services/travel-class/travel-class.service';
import {PlaceSelectorComponent} from '../../../shared/place-selector/place-selector/place-selector.component';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

    @ViewChild('originSelector', {static: false}) originSelector: PlaceSelectorComponent;
    @ViewChild('destinationSelector', {static: false}) destinationSelector: PlaceSelectorComponent;
    /**
     *  FlightType Selector settings
     */
    flightTypeSelectorSettings = {
        label: 'Flight Types',
        service: this.flightTypeService,
    } as SimpleSelectorSettings;

    /**
     * Travel class Selector settings
     */
    travelClassSelectorSettings = {
        label: 'Flight Types',
        service: this.travelClassService,
    } as SimpleSelectorSettings;

    originItemsSelector: Array<any>;
    destinationItemsSelector: Array<any>;

    constructor(protected flightTypeService: FlightTypeService,
                protected travelClassService: TravelClassService,
    ) {
    }

    ngOnInit() {
    }

    handleOriginSelectedChange(event) {
        this.originItemsSelector = event;
    }

    handleDestinationSelectedChange(event) {
        this.destinationItemsSelector = event;
    }

    handleSwapButtonClick(event) {
        const destinationItemsSelector = this.destinationItemsSelector;
        const originItemsSelector = this.originItemsSelector;

        this.originSelector.setSelectedItems(destinationItemsSelector);
        this.destinationSelector.setSelectedItems(originItemsSelector);
    }
}
