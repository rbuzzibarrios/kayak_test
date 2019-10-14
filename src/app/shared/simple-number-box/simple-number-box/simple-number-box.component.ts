import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
    selector: 'app-simple-number-box',
    templateUrl: './simple-number-box.component.html',
    styleUrls: ['./simple-number-box.component.css']
})
export class SimpleNumberBoxComponent implements OnInit {

    @Input() min = null;
    @Input() max = null;

    @Output() incremented: EventEmitter<number> = new EventEmitter();
    @Output() decremented: EventEmitter<number> = new EventEmitter();
    @Output() changeValue: EventEmitter<number> = new EventEmitter();

    number = 0;

    constructor() {
    }

    /**
     * =================================================================================================================
     * Getters & setters
     * =================================================================================================================
     */

    get canBeIncremented(): boolean {
        return isNullOrUndefined(this.max) || this.number < this.max;
    }

    get canBeDecremented(): boolean {
        return isNullOrUndefined(this.min) || this.number > this.min;
    }

    ngOnInit() {
        this.number = isNotNullOrUndefined(this.min) ? this.min : 0;
    }

    /**
     * =================================================================================================================
     * Listeners
     * =================================================================================================================
     */

    onClickIncrementButton(event) {
        if (this.canBeIncremented) {
            this.incremented.emit(++this.number);
            this.changeValue.emit(this.number);
        }
    }

    onClickDecrementButton(event) {
        if (this.canBeDecremented) {
            this.decremented.emit(--this.number);
            this.changeValue.emit(this.number);
        }
    }

}
