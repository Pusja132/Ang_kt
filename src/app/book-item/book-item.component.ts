import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Book} from "../book";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})

export class BookItemComponent implements OnInit {
  private routeSubscription: Subscription;

  public constructor(private route: ActivatedRoute, private http: HttpClient){
    this.routeSubscription = route.params.subscribe(params=>this.book.id=params['id']);
  }
  public book: Book = new Book(0, '', '', 0, '', '', '');

  public ngOnInit(): void {
    this.getBookById()
  }

  public getBookById() {
    this.http.get("http://localhost:8080/book/" + this.book.id).subscribe((data:any) => this.book=new Book(
      data.name,
      data.genre,
      data.name,
      data.count,
      data.authorFullName,
      data.description,
      data.image,
    ))
  }
}
