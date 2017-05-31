import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable()
export class DataService {

  constructor(private restService: RestService) {
  }

  fetch(url: string) {
    return this.restService.makeRequest(url);
  }

}
