import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsService } from '../services/news.service';
import { map, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Article } from '../news';
import { DatePipe, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [RouterLink, DatePipe, CommonModule, ReactiveFormsModule],
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  private newsService = inject(NewsService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  private fb = inject(FormBuilder);

  articles: Article[] = [];
  filteredArticles: Article[] = [];
  filterForm: any;

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      title: [''],
      author: [''],
      date: [''],
    });

    this.activatedRoute.params
      .pipe(
        map((params) => params['category']),
        switchMap((category) => this.newsService.getNewsByCategory(category)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((response) => {
        this.articles = response.articles;
        this.filteredArticles = this.articles;
      });

    this.filterForm.valueChanges.subscribe(() => {
      this.applyFilters();
    });
  }

  applyFilters() {
    const { title, author, date } = this.filterForm.value;

    this.filteredArticles = this.articles.filter((article) => {
      return (
        (!title || article.title.toLowerCase().includes(title.toLowerCase())) &&
        (!author ||
          article.author?.toLowerCase().includes(author.toLowerCase())) &&
        (!date ||
          new Date(article.publishedAt).toDateString() ===
            new Date(date).toDateString())
      );
    });
  }
}
