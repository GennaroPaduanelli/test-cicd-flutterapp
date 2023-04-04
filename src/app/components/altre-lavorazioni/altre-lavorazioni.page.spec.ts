import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltreLavorazioniPage } from './altre-lavorazioni.page';

describe('AltreLavorazioniPage', () => {
  let component: AltreLavorazioniPage;
  let fixture: ComponentFixture<AltreLavorazioniPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AltreLavorazioniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltreLavorazioniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
