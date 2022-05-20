import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookItemComponent} from "./book-item/book-item.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {BooksComponent} from "./books/books.component";
import {BookFormComponent} from "./book-form/book-form.component";

const routes: Routes = [
  {
    path: '*',
    component: AppComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'book-item/:id/redact',
    component: BookFormComponent
  },
  {
    path: 'book-item/:id',
    component: BookItemComponent
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
