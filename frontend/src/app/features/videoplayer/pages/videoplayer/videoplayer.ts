import { ChangeDetectorRef, Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoplayerService } from '../../services/videoplayer';
import { GetPost } from '../../models/get-post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videoplayer',
  imports: [CommonModule],
  templateUrl: './videoplayer.html',
  styleUrl: './videoplayer.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VideoplayerComponent implements OnInit {

  public userId: number = 0;
  public videoId: string | null = null;
  public post: GetPost | null = null;
  public overrides: string = JSON.stringify({ autoPlay: false });
  private hasLogged40Percent: boolean = false;
  private hasLogged100Percent: boolean = false;

  constructor(
    private videoplayerService: VideoplayerService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const userFromQueryParam = this.route.snapshot.queryParamMap.get('user');
    const userFromLocalStorage = localStorage.getItem('user_id');

    const parsedUserFromQueryParam = this.parseUserId(userFromQueryParam);
    const parsedUserFromLocalStorage = this.parseUserId(userFromLocalStorage);

    this.userId = parsedUserFromQueryParam ?? parsedUserFromLocalStorage ?? this.userId;

    this.videoplayerService.getVideo(this.userId).subscribe((id) => {
      this.videoId = id;
      this.cdr.markForCheck();
    });

    this.videoplayerService.getPost(String(this.userId)).subscribe((post) => {
      this.post = post;
      this.cdr.markForCheck();
    });

    console.log('User ID:', this.userId);
  }

  private parseUserId(value: string | null): number | null {
    if (value === null) {
      return null;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  @ViewChild('bbPlayer', { static: false }) playerRef!: ElementRef;

  ngAfterViewInit(): void {
    const player = this.playerRef.nativeElement;
    const api = player.api;

    api.on('canplay', () => {
      api.play();
    });

    // Track 40%
    api.on('timeupdate', () => {
      const duration = api.getDuration();
      const currentTime = api.getCurrentTime();
      const progress = duration > 0 ? currentTime / duration : 0;

      if (!this.hasLogged40Percent && progress >= 0.4) {
        this.hasLogged40Percent = true;
        console.log('Watched 40%');
        this.videoplayerService.send40percent().subscribe();
      }
    });

    // Track completion
    api.on('ended', () => {
      if (this.hasLogged100Percent) {
        return;
      }

      this.hasLogged100Percent = true;
      console.log('Video completed');
      this.videoplayerService.send100percent().subscribe();
    });
  }
}
