import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsService } from '../services/news.service';
import { Article } from '../news';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent implements OnInit {
  private newsService = inject(NewsService);
  private activatedRoute = inject(ActivatedRoute);
  searchQuery: string = '';

  articles: Article[] = [];
  currentPage: number = 1;
  articlesPerPage: number = 10;
  totalPages: number = 1;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.newsService.getNewsByQuery(params['query']).subscribe((response) => {
        this.articles = response.articles;
        this.totalPages = Math.ceil(response.totalResults / this.articlesPerPage);
      });
      this.searchQuery = params['query'];
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
