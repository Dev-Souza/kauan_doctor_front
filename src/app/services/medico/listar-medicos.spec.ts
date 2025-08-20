import { TestBed } from '@angular/core/testing';

import { ListarMedicos } from './listar-medicos';

describe('ListarMedicos', () => {
  let service: ListarMedicos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarMedicos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
