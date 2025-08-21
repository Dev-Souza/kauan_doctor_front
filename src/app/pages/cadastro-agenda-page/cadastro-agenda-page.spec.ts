import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAgendaPage } from './cadastro-agenda-page';

describe('CadastroAgendaPage', () => {
  let component: CadastroAgendaPage;
  let fixture: ComponentFixture<CadastroAgendaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAgendaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
