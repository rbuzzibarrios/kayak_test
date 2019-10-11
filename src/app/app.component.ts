import {Component} from '@angular/core';
import {SimpleSelectorSettings} from './shared/simple-selector/simple-selector/simple-selector.component';
import {FlightTypeService} from './services/flight-type/flight-type.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'kayak';

    selectorSettings = {
        label: 'Types',
        service: this.flightType,
    } as SimpleSelectorSettings;

    constructor(protected flightType: FlightTypeService) {
    }
}
