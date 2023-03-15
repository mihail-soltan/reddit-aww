import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-subreddit-list',
  templateUrl: './subreddit-list.component.html',
  styleUrls: ['./subreddit-list.component.css']
})
export class SubredditListComponent implements OnInit {

  @Input() subreddits: any = [];
  @Output() subredditClick = new EventEmitter<string>();
  @ViewChild('menu') menu!: ElementRef;
  @Input() menuChecked: boolean = false;
  // showMenu: boolean = this.sharedService.getShowMenu().

  constructor(private sharedService: SharedService) { 
  }

  
  ngOnInit(): void {
    this.sharedService.getShowMenu().subscribe((res: any) => {
      console.log(res)
      if(res) {
        this.menu.nativeElement.checked = false;
      }
    })
  }

  onSubredditClick(subreddit: string){
    this.subredditClick.emit(subreddit);
    this.menu.nativeElement.checked = false;
  }

  @Input() handleMenu(event: any) {
    if(event.target.id !== 'menu') {
      this.menuChecked = false;
      this.sharedService.showMenu.next(this.menuChecked);
    }
    console.log(this.menu.nativeElement.checked);
  }
  

}
