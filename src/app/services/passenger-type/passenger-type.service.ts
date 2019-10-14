import {Injectable} from '@angular/core';
import {GeneralService} from '../../core/services/general.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PassengerTypeService extends GeneralService {

    constructor(http: HttpClient) {
        super(http);
    }

    getData(): Observable<any> {
        return this.http.get(`${this.apiUrl}/passenger-type`);
    }
}
