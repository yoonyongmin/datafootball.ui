import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatEditingComponent } from './stat-editing.component';

describe('StatEditingComponent', () => {
  let component: StatEditingComponent;
  let fixture: ComponentFixture<StatEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
