import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  getPostDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
  }

  getPostComments(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts/${id}/comments`);
  }
  searchPosts(query: string): Observable<any[]> {
    return this.getPosts().pipe(
      map((posts: any[]) => posts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.body.toLowerCase().includes(query.toLowerCase())
      ))
    );
  }
}
