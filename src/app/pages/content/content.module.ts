import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ContentComponent } from './content.component';
import { RouterModule } from '@angular/router';

import { ArticleHeaderComponent } from '../../components/article-header/article-header.component';
import { TextContainerComponent } from '../../components/text-container/text-container.component';

@NgModule({
  declarations: [
    ContentComponent,
    ArticleHeaderComponent,
    TextContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [ContentComponent]
})
export class ContentModule { }
