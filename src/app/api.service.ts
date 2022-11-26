import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts(page: string, sortBy: string): Observable<any> {
    return this.http.get(`https://www.reddit.com/r/aww/${sortBy}.json?after=${page}`);
  }

  getSubreddits(): Observable<any> {
    return this.http.get('https://www.reddit.com/subreddits.json');
  }

}
