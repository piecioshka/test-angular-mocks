import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { MockService } from './mock.service';

describe('MockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [MockService]
    });
  });

  it('should ...', inject([MockService], (service: MockService) => {
    expect(service).toBeTruthy();
  }));
});
