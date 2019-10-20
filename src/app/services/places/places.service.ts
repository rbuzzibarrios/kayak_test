import {Injectable} from '@angular/core';
import {GeneralService} from '../../core/services/general.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {isString} from 'util';

@Injectable({
    providedIn: 'root'
})
export class PlacesService extends GeneralService {

    constructor(http: HttpClient) {
        super(http);
    }

    getData(search: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/places`)
            .pipe(
                tap((response: any) => {
                    console.log(response);
                    response.data = response.data
                        .filter(user => {
                            console.log(user);
                            const filterLength = String(search).length;
                            if (filterLength > 1 && isString(search)) {
                                return user.locationName.toLowerCase().startsWith(search.toLowerCase());
                            }

                            return false;
                        });

                    return response;
                })
            );
    }
}
