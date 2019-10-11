import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookingComponent} from './components/booking/booking.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [BookingComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [BookingComponent]
})

export class UiModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: UiModule,
            providers: []
        };
    }
}
