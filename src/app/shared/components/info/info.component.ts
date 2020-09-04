import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  isHidden = false;
  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.isHidden = !this.isHidden;
  }
}
