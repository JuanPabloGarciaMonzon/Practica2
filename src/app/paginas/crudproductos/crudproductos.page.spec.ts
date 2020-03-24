import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { CrudproductosPage } from './crudproductos.page';

describe('CrudproductosPage', () => {
  let component: CrudproductosPage;
  let fixture: ComponentFixture<CrudproductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudproductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

it(
    'should create product',
    async(() => {
      const product = {
        ID: 7,
        NAME: 'mouse',
        DESCRIPTION: 'SSFFSS',
        PRICE: '200'

      };

      component.datap = product;

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        const idElement: HTMLInputElement = fixture.debugElement.query(
          By.css('#ID')
        ).nativeElement;
        const nameElement: HTMLTextAreaElement = fixture.debugElement.query(
          By.css('#NAME')
        ).nativeElement;
        const descriptionElement: HTMLInputElement = fixture.debugElement.query(
          By.css('#DESCRIPTION')
        ).nativeElement;
        const priceElement: HTMLInputElement = fixture.debugElement.query(
          By.css('#PRICE')
        ).nativeElement;


        expect(idElement.value).toContain(product.ID.toString());
        expect(nameElement.value).toContain(product.NAME);
        expect(descriptionElement.value).toContain(product.DESCRIPTION);
		    expect(priceElement.value).toContain(product.PRICE);

      });
    })
  );

});
