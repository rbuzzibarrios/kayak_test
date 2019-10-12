import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleSelectorComponent} from './simple-selector/simple-selector/simple-selector.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material';

@NgModule({
    declarations: [SimpleSelectorComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        MatSelectModule
    ],
    exports: [
        SimpleSelectorComponent,
        MatSelectModule
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
