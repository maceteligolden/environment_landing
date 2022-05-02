import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteborderbuttonComponent } from './whiteborderbutton.component';

describe('WhiteborderbuttonComponent', () => {
  let component: WhiteborderbuttonComponent;
  let fixture: ComponentFixture<WhiteborderbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteborderbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteborderbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
