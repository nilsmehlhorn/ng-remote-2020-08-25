import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss'],
})
export class CursorComponent implements OnInit {
  x = 0;
  y = 0;

  constructor() {}

  ngOnInit(): void {}

  move({ offsetX: x, offsetY: y }: MouseEvent): void {
    this.x = x;
    this.y = y;
  }
}
