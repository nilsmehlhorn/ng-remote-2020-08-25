import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InfoComponent } from './components/info/info.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { TitleBoxComponent } from './components/title-box/title-box.component';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InfoComponent,
    CursorComponent,
    TitleBoxComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BooksModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
