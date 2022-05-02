import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenbuttonComponent } from './greenbutton.component';

describe('GreenbuttonComponent', () => {
  let component: GreenbuttonComponent;
  let fixture: ComponentFixture<GreenbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
