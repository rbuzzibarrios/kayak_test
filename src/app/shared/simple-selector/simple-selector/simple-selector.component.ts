import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-simple-selector',
    templateUrl: './simple-selector.component.html',
    styleUrls: ['./simple-selector.component.scss']
})
export class SimpleSelectorComponent implements OnInit {

    @Input() label = 'Select'

    constructor() {
    }

    ngOnInit() {
    }

}
