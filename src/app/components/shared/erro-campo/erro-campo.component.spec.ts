import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroCampoComponent } from './erro-campo.component';

describe('ErroCampoComponent', () => {
  let component: ErroCampoComponent;
  let fixture: ComponentFixture<ErroCampoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErroCampoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErroCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
