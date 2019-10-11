import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleSelectorComponent} from './simple-selector/simple-selector/simple-selector.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [SimpleSelectorComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        SimpleSelectorComponent
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
