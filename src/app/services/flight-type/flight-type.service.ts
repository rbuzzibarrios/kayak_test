import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GeneralService} from '../../core/services/general.service';

@Injectable({
    providedIn: 'root'
})
export class FlightTypeService extends GeneralService {

    constructor(protected http: HttpClient) {
        super(http);
    }

    /**
     * Get all FlightTypes.
     */
    getData(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/fly-type`);
    }

}
