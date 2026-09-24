import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrumpidexComponent } from './grumpidex.component';

describe('GrumpidexComponent', () => {
  let component: GrumpidexComponent;
  let fixture: ComponentFixture<GrumpidexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrumpidexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrumpidexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
