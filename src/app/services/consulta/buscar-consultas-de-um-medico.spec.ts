import { TestBed } from '@angular/core/testing';

import { BuscarConsultasDeUmMedico } from './buscar-consultas-de-um-medico';

describe('BuscarConsultasDeUmMedico', () => {
  let service: BuscarConsultasDeUmMedico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarConsultasDeUmMedico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
