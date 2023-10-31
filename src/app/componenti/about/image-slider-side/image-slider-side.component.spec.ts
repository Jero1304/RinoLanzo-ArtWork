import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderSideComponent } from './image-slider-side.component';

describe('ImageSliderSideComponent', () => {
  let component: ImageSliderSideComponent;
  let fixture: ComponentFixture<ImageSliderSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSliderSideComponent]
    });
    fixture = TestBed.createComponent(ImageSliderSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
