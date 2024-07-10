import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Article, News } from '../news';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'https://newsapi.org/v2/';
  private http = inject(HttpClient);

  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  getAllNews(): Observable<News> {
    const allNewsUrl = `${this.apiUrl}top-headlines?country=tr&pageSize=100&apiKey=${environment.apiKey}`;
    return this.http.get<News>(allNewsUrl, this.options);
  }

  getNewsByCategory(category: string): Observable<News> {
    const url = `${this.apiUrl}top-headlines?country=tr&category=${category}&pageSize=100&apiKey=${environment.apiKey}`;
    return this.http.get<News>(url, this.options);
  }

  getNewsByQuery(query: string): Observable<News> {
    const url = `${this.apiUrl}top-headlines?country=tr&q=${query}&pageSize=100&apiKey=${environment.apiKey}`;
    return this.http.get<News>(url, this.options);
  }
}
