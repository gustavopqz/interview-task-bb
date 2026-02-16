import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoplayerComponent } from './videoplayer';

describe('VideoplayerComponent', () => {
  let component: VideoplayerComponent;
  let fixture: ComponentFixture<VideoplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoplayerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
