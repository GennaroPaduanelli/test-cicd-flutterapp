import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultWaterFootprintPage } from './result-water-footprint.page';

describe('ResultWaterFootprintPage', () => {
  let component: ResultWaterFootprintPage;
  let fixture: ComponentFixture<ResultWaterFootprintPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultWaterFootprintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultWaterFootprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
