/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpServiceService } from './HttpService.service';

describe('Service: HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpServiceService]
    });
  });

  it('should ...', inject([HttpServiceService], (service: HttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
