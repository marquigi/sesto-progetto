import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAssegniComponent } from './d-assegni.component';

describe('DAssegniComponent', () => {
  let component: DAssegniComponent;
  let fixture: ComponentFixture<DAssegniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DAssegniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAssegniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
