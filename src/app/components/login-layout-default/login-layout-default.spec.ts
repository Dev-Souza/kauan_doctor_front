import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayoutDefault } from './login-layout-default';

describe('LoginLayoutDefault', () => {
  let component: LoginLayoutDefault;
  let fixture: ComponentFixture<LoginLayoutDefault>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLayoutDefault]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLayoutDefault);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
