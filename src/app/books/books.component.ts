
import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  bookTitle = 'Atomic Habits';
  bookId = 301;

  bookInfo = {
    author: 'James Clear',
    genre: 'Productivity',
    publisher: 'Avery Publishing',
    year: 2018
  };

  highlights = [
    'Focuses on small daily improvements',
    'Explains how habits shape identity',
    'Uses science-backed habit-building methods',
    'Easy and practical examples'
  ];
}
