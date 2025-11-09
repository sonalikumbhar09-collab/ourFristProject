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
import { ProductsComponent } from './products/products.component';
import { TodolistsComponent } from './shared/components/todolists/todolists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

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
    ProductsComponent,
    TodolistsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
