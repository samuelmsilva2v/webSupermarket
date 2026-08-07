import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCategoriasComponent } from './consulta-categorias.component';

describe('ConsultaCategoriasComponent', () => {
  let component: ConsultaCategoriasComponent;
  let fixture: ComponentFixture<ConsultaCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaCategoriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
