import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { GetPost } from '../models/get-post.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VideoplayerService {

  constructor(private http: HttpClient){}

  getVideo(videoIdToFind: number): Observable<string | null> {
    return this.http.get('assets/mapping.csv', { responseType: 'text' }).pipe(
      map((csvText) => {
        const mapping: Record<string, string> = {};

        const rows = csvText
          .split(/\r?\n/)
          .map((row) => row.trim())
          .filter((row) => row.length > 0);

        rows.forEach((row) => {
          const [postIdRaw, mediaClipRaw] = row.split(',');

          if (!postIdRaw || !mediaClipRaw) {
            return;
          }

          const postId = postIdRaw.trim();
          const mediaClipId = mediaClipRaw.replace(/"/g, '').trim();

          mapping[postId] = mediaClipId;
        });

        return mapping[String(videoIdToFind)] ?? null;
      })
    );
  }

  getPost(userId: string): Observable<GetPost> {
    return this.http.get<GetPost>(`${environment.apiUrl}/posts/${userId}`);
  };

  send40percent(): Observable<unknown> {
    return this.http.patch(`${environment.apiUrl}/users/1`, {
      watched: 40,
      timestamp: new Date().toISOString()
    });
  }

  send100percent(): Observable<unknown> {
    return this.http.patch(`${environment.apiUrl}/users/1`, {
      watched: 100,
      timestamp: new Date().toISOString()
    });
  }
  
}
