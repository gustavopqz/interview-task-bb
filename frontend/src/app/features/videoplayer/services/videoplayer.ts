import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { GetPost } from '../models/get-post.model';

@Injectable({
  providedIn: 'root',
})
export class Videoplayer {

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
    return of({
      userId: 1,
      id: 1,
      title: 'test',
      body: 'testbody'
    });
  };
  
}
