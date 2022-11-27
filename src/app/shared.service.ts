import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public currentSubreddit: BehaviorSubject<string>;
  constructor() {
    this.currentSubreddit = new BehaviorSubject<string>('r/aww');
  }

  setValue(newValue: any): void {
    this.currentSubreddit.next(newValue);
  }

  getValue(): Observable<string> {
    return this.currentSubreddit.asObservable();
  }
}
