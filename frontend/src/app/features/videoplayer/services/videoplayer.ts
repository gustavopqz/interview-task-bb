import { Injectable } from '@angular/core';
import { GetPost } from '../models/get-post.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Videoplayer {

  constructor(private http: HttpClient){}

  getVideo(userId: string) {

    // Using AI to read CSV
    this.http.get('assets/mapping.csv', { responseType: 'text' })
    .subscribe(csvText => {

      const mapping: Record<string, string> = {};

      const rows = csvText
        .split(/\r?\n/)
        .map(row => row.trim())
        .filter(row => row.length > 0);

      rows.forEach(row => {
        const [postIdRaw, mediaClipRaw] = row.split(',');

        if (!postIdRaw || !mediaClipRaw) {
          return;
        }

        const postId = postIdRaw.trim();
        const mediaClipId = mediaClipRaw.replace(/"/g, '').trim();

        mapping[postId] = mediaClipId;
      });

      // ✅ GET VIDEO BY POST ID
      const postIdToFind = '76';
      const videoId = mapping[postIdToFind];

      console.log('Video ID for post', postIdToFind, ':', videoId);
    });

  }
  
}
