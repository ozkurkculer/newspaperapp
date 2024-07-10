import { Routes, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
  },
  {
    path: 'category/:category',
    component: CategoryPageComponent,
    title: (route: ActivatedRouteSnapshot): string => {
      const category = route.paramMap.get('category');
      return `${category?.charAt(0).toUpperCase()}${category?.slice(1)}`;
    },
  },
  {
    path: 'search/:query',
    component: SearchPageComponent,
    title: (route: ActivatedRouteSnapshot): string => {
      return `Results - "${route.paramMap.get('query')}"`;
    },
  }
];
