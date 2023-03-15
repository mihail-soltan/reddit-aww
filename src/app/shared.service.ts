import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public currentSubreddit: BehaviorSubject<string>;
  public showMenu: BehaviorSubject<boolean>;
  
  constructor() {
    this.currentSubreddit = new BehaviorSubject<string>('r/aww');
    this.showMenu = new BehaviorSubject<boolean>(false);
  }

  setValue(newValue: any): void {
    this.currentSubreddit.next(newValue);
  }

  getValue(): Observable<string> {
    return this.currentSubreddit.asObservable();
  }

  setShowMenu(newValue: any): void {
    this.showMenu.next(newValue);
  }

  getShowMenu(): Observable<boolean> {
    return this.showMenu.asObservable();
  }
}
