import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RedditListComponent } from './components/reddit-list/reddit-list.component';
import { RedditListItemComponent } from './components/reddit-list-item/reddit-list-item.component';
import { SubredditListComponent } from './components/subreddit-list/subreddit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditListComponent,
    RedditListItemComponent,
    SubredditListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
