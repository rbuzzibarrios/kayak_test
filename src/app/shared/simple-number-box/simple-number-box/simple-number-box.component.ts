import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-simple-number-box',
    templateUrl: './simple-number-box.component.html',
    styleUrls: ['./simple-number-box.component.css']
})
export class SimpleNumberBoxComponent implements OnInit {

    number = 0;

    constructor() {
    }

    ngOnInit() {
    }

    onClickIncrementButton(event) {
        this.number++;
    }

    onClickDecrementButton(event) {
        this.number--;
    }

}
