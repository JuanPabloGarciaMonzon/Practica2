import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { CrudusuariosPage } from './crudusuarios.page';

describe('CrudusuariosPage', () => {
  let component: CrudusuariosPage;
  let fixture: ComponentFixture<CrudusuariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudusuariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

it(
    'should create product',
    async(() => {
      const product = {
        ID: 4,
        NAME: 'USUARIO2',
        PASSWORD: '123456',
        EMAIL: 'hola@gmail.com',
        TYPE: 2
      };

      component.data = product;

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        const nameElement: HTMLInputElement = fixture.debugElement.query(
          By.css('#ID')
        ).nativeElement;
        const descriptionElement: HTMLTextAreaElement = fixture.debugElement.query(
          By.css('#NAME')
        ).nativeElement;
        const isAvailableElement: HTMLInputElement = fixture.debugElement.query(
          By.css('#PASSWORD')
        ).nativeElement;
        const priceElement: HTMLInputElement = fixture.debugElement.query(
          By.css('#EMAIL')
        ).nativeElement;
	    const typeElement: HTMLInputElement = fixture.debugElement.query(
          By.css('#TYPE')
        ).nativeElement;

        expect(nameElement.value).toContain(product.ID.toString());
        expect(descriptionElement.value).toContain(product.NAME);
        expect(isAvailableElement.value).toContain(product.PASSWORD);
		expect(priceElement.value).toContain(product.EMAIL);
        expect(typeElement.value).toContain(product.TYPE.toString());
      });
    })
  );

});