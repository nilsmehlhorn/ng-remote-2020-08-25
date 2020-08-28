import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wdw-books';

  onClick(message: {message: string}): void {
    console.log(JSON.stringify(message));
  }
}
