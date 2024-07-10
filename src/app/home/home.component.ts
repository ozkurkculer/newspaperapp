import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsService } from '../services/news.service';
import { Article, News } from '../news';
import { SliderComponent } from '../slider/slider.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SliderComponent, DatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newsService = inject(NewsService);
  articles: Article[] = [];
  sliderArticles: Article[] = [];
  currentPage: number = 1;
  articlesPerPage: number = 10;
  totalPages: number = 1;

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((data) => {
      this.articles = data.articles.slice(3, data.totalResults);
      this.sliderArticles = data.articles.slice(0, 3);
      this.totalPages = Math.ceil(data.totalResults / this.articlesPerPage);
    });
  }


  get paginatedArticles(): Article[] {
    const startIndex = (this.currentPage - 1) * this.articlesPerPage;
    const endIndex = startIndex + this.articlesPerPage;
    return this.articles.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  trackByIndex(index: number, item: any): any {
    return index;
  }
}
