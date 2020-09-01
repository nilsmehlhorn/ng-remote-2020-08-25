import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InfoComponent } from './components/info/info.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { TitleBoxComponent } from './components/title-box/title-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InfoComponent,
    CursorComponent,
    TitleBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
