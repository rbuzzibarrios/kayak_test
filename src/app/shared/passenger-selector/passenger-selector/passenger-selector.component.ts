import {Component, OnInit} from '@angular/core';
import {PassengerTypeService} from '../../../services/passenger-type/passenger-type.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-passenger-selector',
    templateUrl: './passenger-selector.component.html',
    styleUrls: ['./passenger-selector.component.css']
})
export class PassengerSelectorComponent implements OnInit {

    options: [];

    constructor(protected passengerTypeService: PassengerTypeService) {
    }

    /**
     * =================================================================================================================
     * Getters & setters
     * =================================================================================================================
     */
    get optionsExist(): boolean {
        return !this.options.length;
    }

    loadPassengerTypes(): Observable<any> {
        return this.passengerTypeService.getData();
    }

    /**
     * =================================================================================================================
     * Ng lifecycle hooks
     * =================================================================================================================
     */

    ngOnInit() {
        this.loadPassengerTypes().subscribe(({data}) => {
            this.options = data;
        });
    }
}
