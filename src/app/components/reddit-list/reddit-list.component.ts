import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css'],
  host: {
    'document:click': 'handleClick($event)',
  },
})
export class RedditListComponent implements OnInit {
  subreddits: any = [];
  currentSubreddit: string = 'r/aww';
  showMenu: boolean = false;
  constructor(
    private apiService: ApiService,
    private sharedService: SharedService
  ) {}

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
    });
  }

  onSubredditClick(subreddit: any) {
    this.goToTop();
    this.currentSubreddit = subreddit;
    this.sharedService.currentSubreddit.next(subreddit);
  }

  goToTop() {
    window.scrollTo(0, 0);
  }

  handleMenu(event: any) {
    this.sharedService.setShowMenu(event.target.classList.contains('menu'));
    if(event.target.id === "reddit-list-item"){
      // this.showMenu = false;
      console.log("reddit-list-item");
    }
  }
}
