import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleSelectorComponent} from './simple-selector/simple-selector/simple-selector.component';
import {HttpClientModule} from '@angular/common/http';
import {
    MatAutocompleteModule,
    MatCheckboxModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectAutocompleteModule} from 'mat-select-autocomplete';

const BASE_MODULE = [ReactiveFormsModule, FormsModule, MatCheckboxModule, SelectAutocompleteModule, MatIconModule];

@NgModule({
    declarations: [SimpleSelectorComponent],
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
