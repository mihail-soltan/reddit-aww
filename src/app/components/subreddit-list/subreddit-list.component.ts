import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-subreddit-list',
  templateUrl: './subreddit-list.component.html',
  styleUrls: ['./subreddit-list.component.css']
})
export class SubredditListComponent implements OnInit {

  @Input() subreddits: any = [];
  // output event emitter
  @Output() subredditClick = new EventEmitter<string>();

  constructor() { }

  
  ngOnInit(): void {
  }

  onSubredditClick(subreddit: string){
    this.subredditClick.emit(subreddit);
  }

  // emit subreddit to parent component (reddit-list)
  
  

}
