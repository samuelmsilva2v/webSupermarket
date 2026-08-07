import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoCategoriasComponent } from './edicao-categorias.component';

describe('EdicaoCategoriasComponent', () => {
  let component: EdicaoCategoriasComponent;
  let fixture: ComponentFixture<EdicaoCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoCategoriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
