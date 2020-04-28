import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAgeComponent } from './video-age.component';

describe('VideoAgeComponent', () => {
  let component: VideoAgeComponent;
  let fixture: ComponentFixture<VideoAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
