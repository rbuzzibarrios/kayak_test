import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleSelectorComponent} from './simple-selector/simple-selector/simple-selector.component';
import {HttpClientModule} from '@angular/common/http';
import {
    MatAutocompleteModule,
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

const BASE_MODULE = [
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    SelectAutocompleteModule,
    MatIconModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule
];

@NgModule({
    declarations: [SimpleSelectorComponent, SimpleNumberBoxComponent, OptionPassengerSelectorComponent],
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
