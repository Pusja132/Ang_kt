import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book-item-list',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  public constructor(private router: Router, private http: HttpClient){}

  public books: Book [] = [
    new Book(0, '', '', 0, '', '', ''),
  ];

  public getBooks() {
    this.http.get("http://localhost:8080/book/").subscribe((data:any) => {
      for (let book of data) {
        this.books.push(new Book(
          data.name,
          data.genre,
          data.name,
          data.count,
          data.authorFullName,
          data.description,
          data.image,
        )
      )
      }
    })
  }

  public ngOnInit(): void {
    this.getBooks()
  }

  public goToItem(book: Book) {
    this.router.navigate(['/book-item', book.id]);
  }
}
