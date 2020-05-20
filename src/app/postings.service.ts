import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostingsService {

  constructor(
    private http: HttpClient
    ) { }

    getPostings() {
      return this.http.get('https://www.mocky.io/v2/5ec558fd2f0000c9e5dc31bd');
    }
}