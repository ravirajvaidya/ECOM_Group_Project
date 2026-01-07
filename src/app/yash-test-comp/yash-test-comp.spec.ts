import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YashTestComp } from './yash-test-comp';

describe('YashTestComp', () => {
  let component: YashTestComp;
  let fixture: ComponentFixture<YashTestComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YashTestComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YashTestComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
