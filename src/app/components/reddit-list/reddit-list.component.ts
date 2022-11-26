import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css'],
})
export class RedditListComponent implements OnInit {
  subreddits: any = [];
  currentSubreddit: string = 'r/aww';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getSubreddits();
  }

  getSubreddits(): void {
    this.apiService.getSubreddits().subscribe((res: any) => {
      let subs = res.data.children;
      this.subreddits = subs.filter(
        (sub: any) =>
          !sub.data.display_name_prefixed.startsWith('r/shitposting') &&
          !sub.data.display_name_prefixed.startsWith('r/AmItheAsshole') &&
          !sub.data.display_name_prefixed.startsWith('r/interestingasfuck') 
      );
      console.log(this.subreddits);
    });
  }

  onSubredditClick(subreddit: any) {
    this.currentSubreddit = subreddit;
    console.log(this.currentSubreddit);
  }
}
