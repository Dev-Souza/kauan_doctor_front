import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPattern } from './header-pattern';

describe('HeaderPattern', () => {
  let component: HeaderPattern;
  let fixture: ComponentFixture<HeaderPattern>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPattern]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPattern);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
