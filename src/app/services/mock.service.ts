import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class MockService {

  constructor(private http: Http) {
  }

  makeRequest(url: string): Observable<Response> {
    console.log('◉ Mock finished loading: GET "%s"', url);

    return this.http
      .get(url)
      .map((res) => {
        const original = res.json().data;
        return new Response(new ResponseOptions({ body: original }));
      })
      .map((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error('[Mock] Request to "%s" failed', url);
        return Observable.throw(err);
      });
  }
}
