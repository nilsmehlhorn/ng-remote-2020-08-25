import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss'],
})
export class TitleBoxComponent implements OnInit {
  @Input() title: string;

  @Output() titleClicked = new EventEmitter<{ message: string }>();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.titleClicked.emit({ message: 'title message' });
  }
}
