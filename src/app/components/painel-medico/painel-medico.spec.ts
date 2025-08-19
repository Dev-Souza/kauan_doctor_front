import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelMedico } from './painel-medico';

describe('PainelMedico', () => {
  let component: PainelMedico;
  let fixture: ComponentFixture<PainelMedico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelMedico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelMedico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
