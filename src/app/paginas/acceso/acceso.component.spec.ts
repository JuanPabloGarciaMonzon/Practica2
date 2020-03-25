import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoComponent } from './acceso.component';
import { HttpClientModule } from '@angular/common/http';
import { throwError } from 'rxjs';

describe('AccesoComponent', () => {
  let component: AccesoComponent;
  let fixture: ComponentFixture<AccesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ AccesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When OnLogin(event:Event) is called', () => {
    it('should handler error', () => {
      spyOn(component.serv, 'obtenerdatos_Usuarios_para_login').and.returnValue(throwError({error: 'Error'}));
      component.OnLogin(event);
      expect(component.error).toBeTruthy();
    })
  });

});
