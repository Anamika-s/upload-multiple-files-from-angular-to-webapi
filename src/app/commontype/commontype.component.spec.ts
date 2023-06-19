import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommontypeComponent } from './commontype.component';

describe('CommontypeComponent', () => {
  let component: CommontypeComponent;
  let fixture: ComponentFixture<CommontypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommontypeComponent]
    });
    fixture = TestBed.createComponent(CommontypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
