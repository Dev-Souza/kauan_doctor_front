import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelPaciente } from './painel-paciente';

describe('PainelPaciente', () => {
  let component: PainelPaciente;
  let fixture: ComponentFixture<PainelPaciente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelPaciente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelPaciente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
