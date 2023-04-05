import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarboonFootprintPieChartPage } from './carboon-footprint-pie-chart.page';

describe('CarboonFootprintPieChartPage', () => {
  let component: CarboonFootprintPieChartPage;
  let fixture: ComponentFixture<CarboonFootprintPieChartPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarboonFootprintPieChartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarboonFootprintPieChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
