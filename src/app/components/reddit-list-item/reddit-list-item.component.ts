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
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-reddit-list-item',
  templateUrl: './reddit-list-item.component.html',
  styleUrls: ['./reddit-list-item.component.css'],
})
export class RedditListItemComponent implements OnInit, AfterViewInit {
  after: string = '';
  sortBy: string = 'hot';

  @ViewChildren('lastPost', { read: ElementRef })
  lastPost!: QueryList<ElementRef>;

  @Input() posts: any = [];
  currentSubreddit: string = '';

  observer: any;

  loading: boolean = false;

  constructor(
    private apiService: ApiService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.intersectionObserver();
    this.sharedService.currentSubreddit.subscribe((res: any) => {
      this.currentSubreddit = res;
      this.getNewPosts();
    });
  }

  ngAfterViewInit() {
    this.lastPost.changes.subscribe((post) => {
      if (post.last) this.observer.observe(post.last.nativeElement);
    });
  }

  getPosts(): void {
    this.loading = true;
    this.apiService
      .getPosts(this.currentSubreddit, this.after, this.sortBy)
      .subscribe((res: any) => {
        this.posts = [...this.posts, ...res.data.children];
        this.after = res.data.after;
        this.loading = false;
      });
  }

  getNewPosts() {
    this.posts = [];
    this.after = '';
    this.getPosts();
  }

  isThumbnailImage(post: any) {
    return post.startsWith('https://') ? post : '../../../assets/logo.png';
  }

  intersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.getPosts();
      }
    }, options);
  }
}
