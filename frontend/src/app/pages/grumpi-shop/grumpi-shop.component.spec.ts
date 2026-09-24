import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrumpiShopComponent } from './grumpi-shop.component';

describe('GrumpiShopComponent', () => {
  let component: GrumpiShopComponent;
  let fixture: ComponentFixture<GrumpiShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrumpiShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrumpiShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
