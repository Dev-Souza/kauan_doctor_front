import { TestBed } from '@angular/core/testing';

import { CadastrarAgendaService } from './cadastrar-agenda-service';

describe('CadastrarAgendaService', () => {
  let service: CadastrarAgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarAgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
