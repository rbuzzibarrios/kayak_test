import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FlightTypeService} from '../../../services/flight-type/flight-type.service';
import * as _ from 'lodash';

export class SimpleSelectorSettings {
    label?: string;
    service?: any;
    functionService?: string;
}

@Component({
    selector: 'app-simple-selector',
    templateUrl: './simple-selector.component.html',
    styleUrls: ['./simple-selector.component.scss']
})
export class SimpleSelectorComponent implements OnInit, OnChanges {

    /**
     * Input Selector Settings
     */
    @Input() settings: SimpleSelectorSettings;

    options: any[] = [];

    /**
     * Manage selector Settings
     */
    selectorSettings: SimpleSelectorSettings;

    constructor(protected flightTypeService: FlightTypeService) {
        this.selectorSettings = this.defaultSettings();
    }

    /**
     * =================================================================================================================
     * Getters & setters
     * =================================================================================================================
     */

    protected defaultSettings(): SimpleSelectorSettings {
        return {
            label: 'Select',
            service: null,
            functionService: 'getData',
        } as SimpleSelectorSettings;
    }

    protected parseSettings(settings: SimpleSelectorSettings) {
        if (settings !== undefined) {
            _.merge(this.selectorSettings, settings);
        }
    }

    protected loadData(): void {
        if (this.selectorSettings.service) {
            this.selectorSettings.service[this.selectorSettings.functionService]()
                .subscribe(({data}) => {
                    this.options = data;
                });
        }
    }

    /**
     * =================================================================================================================
     * Ng lifecycle hooks
     * =================================================================================================================
     */

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('settings')) {
            console.log(changes);
            this.parseSettings(changes['settings'].currentValue as SimpleSelectorSettings);
            this.loadData();
        }
    }
}
