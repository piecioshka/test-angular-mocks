import { Injectable } from '@angular/core';

import { RestService } from './rest.service';
import { MockService } from './mock.service';

@Injectable()
export class DataService {

  requestService: RestService | MockService;

  constructor(private restService: RestService,
              private mockService: MockService) {
    // this.useRestService();
    this.useMockService();
  }

  private useRestService() {
    this.requestService = this.restService;
  }

  private useMockService() {
    this.requestService = this.mockService;
  }

  fetch(url: string) {
    return this.requestService.makeRequest(url);
  }

}
