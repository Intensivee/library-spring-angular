import { CategoryService } from './../../service/category.service';
import { BookService } from './../../service/book.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from './../../service/author.service';
import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Book } from 'src/app/models/book';
import { mergeMap, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { moveEmitHelpers } from 'typescript';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  author: Author = new Author();
  books: Book[];

  constructor(private authorService: AuthorService,
    private bookService: BookService,
    private categoryService: CategoryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor(): void {
    if (this.route.snapshot.paramMap.has('id')) {
      const authorId = +this.route.snapshot.paramMap.get('id');
      this.authorService.getAuthorById(authorId).subscribe(author => this.author = author);

      this.bookService.getBooksByAuthorId(authorId).subscribe(books => this.books = books);
      console.log(this.books);
    }
  }
}
