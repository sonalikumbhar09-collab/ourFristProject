import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CardsComponent } from './cards/cards.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { CarsComponent } from './cars/cars.component'; 
import { BooksComponent } from './books/books.component';
import { CricketersComponent } from './cricketers/cricketers.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UsersComponent,
    CarsComponent,
    BooksComponent,
    CricketersComponent,
    StudentsComponent,
    CardsComponent,
    
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
