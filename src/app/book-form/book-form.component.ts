import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})

export class BookFormComponent {
  constructor(private router: Router, private http: HttpClient){}

  public book: Book = new Book(0, '', '', 0, '', '', '');

  public getBookId(): Number {
    let id: string = this.router.url.replace("/redact", "");

    return Number(id.charAt(id.length - 1));
  }

  public sendData(book: Book) {
    this.http.put("http://localhost:8080/book/" + this.getBookId(), {
      'id': book.id,
      'name': book.name,
      'genre': book.genre,
      'authorFullName': book.authorFullName,
      'count': book.count,
      'description': book.description,
      'image': book.image,
    }).subscribe(data => {
      console.log(data)
    });
  }
}
