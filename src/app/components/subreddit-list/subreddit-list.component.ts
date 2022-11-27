import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-subreddit-list',
  templateUrl: './subreddit-list.component.html',
  styleUrls: ['./subreddit-list.component.css']
})
export class SubredditListComponent implements OnInit {

  @Input() subreddits: any = [];
  @Output() subredditClick = new EventEmitter<string>();
  @ViewChild('menu') menu!: ElementRef;

  constructor() { }

  
  ngOnInit(): void {
  }

  onSubredditClick(subreddit: string){
    this.subredditClick.emit(subreddit);
    this.menu.nativeElement.checked = false;
  }

  
  

}
