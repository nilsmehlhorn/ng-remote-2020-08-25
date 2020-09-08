import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { BookDataService } from '../../services/book-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  form: FormGroup;

  constructor(private bookData: BookDataService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      author: new FormControl('', Validators.required),
    });
  }

  save(): void {
    this.bookData.createBook(this.form.value).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
