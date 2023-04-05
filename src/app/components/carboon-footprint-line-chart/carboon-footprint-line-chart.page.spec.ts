import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarboonFootprintLineChartPage } from './carboon-footprint-line-chart.page';

describe('CarboonFootprintLineChartPage', () => {
  let component: CarboonFootprintLineChartPage;
  let fixture: ComponentFixture<CarboonFootprintLineChartPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarboonFootprintLineChartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarboonFootprintLineChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
