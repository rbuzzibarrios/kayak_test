import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleSelectorComponent} from './simple-selector/simple-selector/simple-selector.component';
import {HttpClientModule} from '@angular/common/http';
import {
    MatAutocompleteModule, MatButtonToggleModule,
    MatCheckboxModule, MatDatepickerModule, MatExpansionModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectAutocompleteModule} from 'mat-select-autocomplete';
import {SatDatepickerModule, SatNativeDateModule} from 'saturn-datepicker';
import {SimpleNumberBoxComponent} from './simple-number-box/simple-number-box/simple-number-box.component';
import {OptionPassengerSelectorComponent} from './option-passenger-selector/option-passenger-selector/option-passenger-selector.component';
import {PassengerSelectorComponent} from './passenger-selector/passenger-selector/passenger-selector.component';
import {PlaceSelectorComponent} from './place-selector/place-selector/place-selector.component';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';

const BASE_MODULE = [
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    SelectAutocompleteModule,
    MatIconModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatAutocompleteModule,
    NgxMatSelectSearchModule,
    MatButtonToggleModule,
];

@NgModule({
    declarations: [
        SimpleSelectorComponent,
        SimpleNumberBoxComponent,
        OptionPassengerSelectorComponent,
        PassengerSelectorComponent,
        PlaceSelectorComponent
    ],
    imports: [
        ...BASE_MODULE,
        CommonModule,
        HttpClientModule,
        MatSelectModule,
        MatToolbarModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        ...BASE_MODULE,
        SimpleSelectorComponent,
        MatSelectModule,
        MatToolbarModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        SimpleNumberBoxComponent,
        OptionPassengerSelectorComponent,
        PassengerSelectorComponent,
        PlaceSelectorComponent
    ],
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: SharedModule,
            providers: []
        };
    }
}
