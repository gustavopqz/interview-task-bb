import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videoplayer as VideoplayerService } from '../../services/videoplayer';

@Component({
  selector: 'app-videoplayer',
  imports: [],
  templateUrl: './videoplayer.html',
  styleUrl: './videoplayer.scss',
})
export class Videoplayer implements OnInit {

  public userId: number = 0;
  public videoId: string | null = null;

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
      console.log(id);
      this.videoId = id;
      this.cdr.markForCheck();
    });
  }

  private parseUserId(value: string | null): number | null {
    if (value === null) {
      return null;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
}
