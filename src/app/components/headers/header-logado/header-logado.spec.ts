import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogado } from './header-logado';

describe('HeaderLogado', () => {
  let component: HeaderLogado;
  let fixture: ComponentFixture<HeaderLogado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLogado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLogado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
