import { TestBed } from '@angular/core/testing';

import { HorariosDisponiveis } from './horarios-disponiveis';

describe('HorariosDisponiveis', () => {
  let service: HorariosDisponiveis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorariosDisponiveis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
