import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurmissioncardsComponent } from './ourmissioncards.component';

describe('OurmissioncardsComponent', () => {
  let component: OurmissioncardsComponent;
  let fixture: ComponentFixture<OurmissioncardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurmissioncardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurmissioncardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
