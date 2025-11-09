import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/students.component';
import { CardsComponent } from './cards/cards.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { CarsComponent } from './cars/cars.component'; 
import { BooksComponent } from './books/books.component';
import { CricketersComponent } from './cricketers/cricketers.component';
import { ProductsComponent } from './products/products.component';
import { TodolistsComponent } from './shared/components/todolists/todolists.component';
import { StudentsComponent } from './shared/components/students/students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UsersComponent,
    CarsComponent,
    BooksComponent,
    CricketersComponent,
    StudentComponent,
    CardsComponent,
    ProductsComponent,
    TodolistsComponent,
    StudentsComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
