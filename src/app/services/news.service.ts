import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Article, News } from '../news';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'https://newsapi.org/v2/';
  private http = inject(HttpClient);
  private allNewsUrl = `${this.apiUrl}top-headlines?country=tr&pageSize=100&apiKey=${environment.apiKey}`;

  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  getAllNews(): Observable<News> {
    return this.http.get<News>(this.allNewsUrl, this.options);
  }
}
