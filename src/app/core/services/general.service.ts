import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GeneralService {
    protected apiUrl = 'http://kayak.test:8080';

    constructor(protected http: HttpClient) {
    }
}
