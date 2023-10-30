import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigHeroComponent } from './big-hero.component';

describe('BigHeroComponent', () => {
  let component: BigHeroComponent;
  let fixture: ComponentFixture<BigHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigHeroComponent]
    });
    fixture = TestBed.createComponent(BigHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
