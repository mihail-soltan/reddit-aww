import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-reddit-list-item',
  templateUrl: './reddit-list-item.component.html',
  styleUrls: ['./reddit-list-item.component.css'],
})
export class RedditListItemComponent implements OnInit, AfterViewInit {
  title: string = 'Reddit List';
  after: string = '';
  sortBy: string = 'hot';

  @ViewChildren('lastPost', { read: ElementRef })
  lastPost!: QueryList<ElementRef>;

  @Input() posts: any = [];


  observer: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getPosts();
    this.intersectionObserver();
  }

  ngAfterViewInit() {
    this.lastPost.changes.subscribe((post) => {
      // console.log(post)
      if(post.last) this.observer.observe(post.last.nativeElement); 
    });
  }

  getPosts(): void {
    this.apiService.getPosts(this.after, this.sortBy).subscribe((res: any) => {
      this.posts = [...this.posts, ...res.data.children];
      this.after = res.data.after;
    });
  }

  intersectionObserver(){
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting){
        this.getPosts();
        console.log(this.posts.length)
      }
    }, options);
  }
}
