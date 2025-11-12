import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DContanteComponent } from './d-contante.component';

describe('DContanteComponent', () => {
  let component: DContanteComponent;
  let fixture: ComponentFixture<DContanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DContanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DContanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
