import { TestBed } from '@angular/core/testing';

import { BuscarMedicoPeloId } from './buscar-medico-pelo-id';

describe('BuscarMedicoPeloId', () => {
  let service: BuscarMedicoPeloId;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarMedicoPeloId);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
