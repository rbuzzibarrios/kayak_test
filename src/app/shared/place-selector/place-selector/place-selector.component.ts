import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {debounceTime, delay, filter, map, switchMap, take, takeUntil, tap} from 'rxjs/operators';
import {PlacesService} from '../../../services/places/places.service';

export enum PlaceSelectorType {
    ORIGIN = 'origin',
    DESTINATION = 'destination'
}

@Component({
    selector: 'app-place-selector',
    templateUrl: './place-selector.component.html',
    styleUrls: ['./place-selector.component.css']
})
export class PlaceSelectorComponent implements OnInit, AfterViewInit, OnChanges {

    @Input() labelTitle: string;

    @Input() type = PlaceSelectorType.ORIGIN;

    filteredPlaces: Observable<any>;

    /** control for the selected place for server side filtering */
    public placeServerSideCtrl: FormControl = new FormControl();

    /** control for filter for server side. */
    public placeServerSideFilteringCtrl: FormControl = new FormControl();

    /** indicate search operation is in progress */
    public searching = false;

    /** Subject that emits when the component has been destroyed. */
    protected _onDestroy = new Subject<void>();

    constructor(protected placesService: PlacesService) {
    }

    loadPlaces(search: string): Observable<any> {
        return this.placesService.getData(search);
    }

    get placeHolder(): string {
        return this.labelTitle;
    }

    get isOrigin(): boolean {
        return this.type === PlaceSelectorType.ORIGIN;
    }

    get isDestination(): boolean {
        return this.type === PlaceSelectorType.DESTINATION;
    }

    ngOnInit() {
        // listen for search field value changes
        this.filteredPlaces = this.placeServerSideFilteringCtrl.valueChanges
            .pipe(
                filter(search => !!search),
                tap(() => this.searching = true),
                takeUntil(this._onDestroy),
                debounceTime(200),
                switchMap(search => this.loadPlaces(search)),
                delay(500)
            );
    }

    ngAfterViewInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('labelTitle')) {
        }
    }
}
