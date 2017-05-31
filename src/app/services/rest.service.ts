import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class RestService {

  constructor(private http: Http) {
  }

  makeRequest(url: string): Observable<Response> {
    return this.http.get(url)
      .map((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error('Request to "%s" failed', url);
        return Observable.throw(err);
      });
  }
}
