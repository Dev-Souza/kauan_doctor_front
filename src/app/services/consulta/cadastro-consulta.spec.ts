import { TestBed } from '@angular/core/testing';

import { CadastroConsulta } from './cadastro-consulta';

describe('CadastroConsulta', () => {
  let service: CadastroConsulta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroConsulta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
