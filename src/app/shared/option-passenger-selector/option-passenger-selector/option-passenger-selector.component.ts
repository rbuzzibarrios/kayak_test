import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-option-passenger-selector',
    templateUrl: './option-passenger-selector.component.html',
    styleUrls: ['./option-passenger-selector.component.css']
})
export class OptionPassengerSelectorComponent implements OnInit, OnChanges {

    @Input() name: string;
    @Input() age: string;

    nameOption: '';
    ageOption: '';

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('name')) {
            this.nameOption = changes.name.currentValue;
        }

        if (changes.hasOwnProperty('age')) {
            this.ageOption = changes.age.currentValue;
        }
    }
}
