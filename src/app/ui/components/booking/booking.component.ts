import {Component, NgZone, OnInit} from '@angular/core';
import {SimpleSelectorSettings} from '../../../shared/simple-selector/simple-selector/simple-selector.component';
import {FlightTypeService} from '../../../services/flight-type/flight-type.service';
import {TravelClassService} from '../../../services/travel-class/travel-class.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map} from 'rxjs/operators';
import {isArray} from 'util';
import {PlacesService} from '../../../services/places/places.service';

declare const $: any;

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
        service: this.flightTypeService,
    } as SimpleSelectorSettings;

    /**
     * Travel class Selector settings
     */
    travelClassSelectorSettings = {
        label: 'Flight Types',
        service: this.travelClassService,
    } as SimpleSelectorSettings;

    origin = new FormControl();
    myControl = new FormControl();
    origins = [{id: 0, locationName: ''}];
    destinations = [{id: 0, locationName: ''}];

    constructor(protected flightTypeService: FlightTypeService,
                protected travelClassService: TravelClassService,
                protected placesService: PlacesService,
    ) {

    }

    filterOrigin(): Observable<any> {
        return this.placesService.getData()
            .pipe(
                map(({data}) => {
                    const filterLength = String(this.origin.value).length;
                    if (filterLength <= 1) {
                        data = [{id: 0, locationName: ''}];

                        return data;
                    }
                    if (isArray(data)) {
                        return (data as Array<any>).filter((option) => {
                            return String(option.locationName.toLowerCase()).startsWith(this.origin.value.toLowerCase());
                        });
                    }
                })
            );
    }

    ngOnInit() {
        $('body')
            .on('keyup', '#cdk-overlay-0 input[type=text]', () => {
                console.log('change');
                const filterInput = $('#cdk-overlay-0 input[type=text]').val();
                this.origin.setValue(filterInput, {emitEvent: true});
            }).bind(this);

        this.origin.valueChanges
            .subscribe((value) => {
                if (String(value).length >= 2) {
                    this.filterOrigin().subscribe((data) => {
                        this.origins = data;
                    });
                }
            });
    }
}
