import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../news';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  @Input() slides: Article[] = [];
  currentIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }


  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  previousSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
