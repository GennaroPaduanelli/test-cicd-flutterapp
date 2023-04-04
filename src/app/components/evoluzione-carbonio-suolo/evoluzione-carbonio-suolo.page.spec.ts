import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvoluzioneCarbonioSuoloPage } from './evoluzione-carbonio-suolo.page';

describe('EvoluzioneCarbonioSuoloPage', () => {
  let component: EvoluzioneCarbonioSuoloPage;
  let fixture: ComponentFixture<EvoluzioneCarbonioSuoloPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EvoluzioneCarbonioSuoloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvoluzioneCarbonioSuoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
