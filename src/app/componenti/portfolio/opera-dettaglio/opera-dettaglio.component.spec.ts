import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperaDettaglioComponent } from './opera-dettaglio.component';

describe('OperaDettaglioComponent', () => {
  let component: OperaDettaglioComponent;
  let fixture: ComponentFixture<OperaDettaglioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperaDettaglioComponent]
    });
    fixture = TestBed.createComponent(OperaDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
