import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoUsuariosComponent } from './listado-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { throwError } from 'rxjs';

describe('ListadoUsuariosComponent', () => {
  let component: ListadoUsuariosComponent;
  let fixture: ComponentFixture<ListadoUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListadoUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When getUsers() is called', () => {
    it('should handler error', () => {
      spyOn(component.service,'getUsers').and.returnValue(throwError({error: 'Error'}));
      component.getUsers();
      expect(component.error).toBeTruthy();
    })
  });
});
