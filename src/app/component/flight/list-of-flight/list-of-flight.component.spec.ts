import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFlightComponent } from './list-of-flight.component';

describe('ListOfFlightComponent', () => {
  let component: ListOfFlightComponent;
  let fixture: ComponentFixture<ListOfFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
