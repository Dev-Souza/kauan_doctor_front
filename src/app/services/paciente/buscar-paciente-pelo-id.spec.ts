import { TestBed } from '@angular/core/testing';

import { BuscarPacientePeloId } from './buscar-paciente-pelo-id';

describe('BuscarPacientePeloId', () => {
  let service: BuscarPacientePeloId;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarPacientePeloId);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
