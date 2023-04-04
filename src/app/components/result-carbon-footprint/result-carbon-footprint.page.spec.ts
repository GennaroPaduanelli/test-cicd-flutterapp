import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultCarbonFootprintPage } from './result-carbon-footprint.page';

describe('ResultCarbonFootprintPage', () => {
  let component: ResultCarbonFootprintPage;
  let fixture: ComponentFixture<ResultCarbonFootprintPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultCarbonFootprintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultCarbonFootprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
