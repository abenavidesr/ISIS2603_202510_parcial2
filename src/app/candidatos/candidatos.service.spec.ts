/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CandidatosService } from './candidatos.service';

describe('Service: Candidatos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatosService]
    });
  });

  it('should ...', inject([CandidatosService], (service: CandidatosService) => {
    expect(service).toBeTruthy();
  }));
});
