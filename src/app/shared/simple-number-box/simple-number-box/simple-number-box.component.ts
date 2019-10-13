import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-simple-number-box',
    templateUrl: './simple-number-box.component.html',
    styleUrls: ['./simple-number-box.component.css']
})
export class SimpleNumberBoxComponent implements OnInit {

    @Input() min = 0;
    @Input() max = 0;

    number = 0;

    constructor() {
    }

    /**
     * =================================================================================================================
     * Getters & setters
     * =================================================================================================================
     */

    get canBeIncremented(): boolean {
        return this.max === 0 || this.number < this.max;
    }

    get canBeDecremented(): boolean {
        return this.min === 0 || this.number > this.min;
    }

    ngOnInit() {
        this.number = this.min;
    }


    /**
     * =================================================================================================================
     * Listeners
     * =================================================================================================================
     */

    onClickIncrementButton(event) {
        if (this.canBeIncremented) {
            this.number++;
        }
    }

    onClickDecrementButton(event) {
        if (this.canBeDecremented) {
            this.number--;
        }
    }

}
