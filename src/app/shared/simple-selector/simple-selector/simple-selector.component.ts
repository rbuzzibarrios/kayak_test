import {Component, Input, OnInit} from '@angular/core';
import {FlightTypeService} from '../../../services/flight-type/flight-type.service';

@Component({
    selector: 'app-simple-selector',
    templateUrl: './simple-selector.component.html',
    styleUrls: ['./simple-selector.component.scss']
})
export class SimpleSelectorComponent implements OnInit {

    @Input() label = 'Select';

    @Input() options = [];

    constructor(protected flightTypeService: FlightTypeService) {
    }

    ngOnInit() {
        this.flightTypeService.getFlightTypeData().subscribe(({data}) => {
            console.log(data);
            this.options = data;
        });
    }

}
