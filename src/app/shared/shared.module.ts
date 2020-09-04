import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InfoComponent } from './components/info/info.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { TitleBoxComponent } from './components/title-box/title-box.component';
import { RouterModule } from '@angular/router';

const declarations = [
  NavigationComponent,
  InfoComponent,
  CursorComponent,
  TitleBoxComponent,
];

@NgModule({
  declarations,
  imports: [CommonModule, RouterModule],
  exports: declarations
})
export class SharedModule {}
