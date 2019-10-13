import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-simple-number-box',
    templateUrl: './simple-number-box.component.html',
    styleUrls: ['./simple-number-box.component.css']
})
export class SimpleNumberBoxComponent implements OnInit {

    @Input() min = 0;
    @Input() max = 0;

    @Output() incremented: EventEmitter<number> = new EventEmitter();
    @Output() decremented: EventEmitter<number> = new EventEmitter();
    @Output() change: EventEmitter<number> = new EventEmitter();

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
            this.incremented.emit(++this.number);
            this.change.emit(this.number);
        }
    }

    onClickDecrementButton(event) {
        if (this.canBeDecremented) {
            this.decremented.emit(--this.number);
            this.change.emit(this.number);
        }
    }

}
