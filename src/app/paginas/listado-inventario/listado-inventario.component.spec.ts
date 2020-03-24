import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoInventarioComponent } from './listado-inventario.component';
import { throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('ListadoInventarioComponent', () => {
  let component: ListadoInventarioComponent;
  let fixture: ComponentFixture<ListadoInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListadoInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When getUsers() is called', () => {
    it('should handler error', () => {
      spyOn(component.service,'getProducts').and.returnValue(throwError({error: 'Error'}));
      component.getProducts();
      expect(component.error).toBeTruthy();
    })
  });
  
});
