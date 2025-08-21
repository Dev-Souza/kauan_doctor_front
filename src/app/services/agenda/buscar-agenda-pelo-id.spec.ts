import { TestBed } from '@angular/core/testing';

import { BuscarAgendaPeloId } from './buscar-agenda-pelo-id';

describe('BuscarAgendaPeloId', () => {
  let service: BuscarAgendaPeloId;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarAgendaPeloId);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
