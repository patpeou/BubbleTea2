import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import {Post} from "./post.model";

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] =[];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: any }>('http://localhost:3000/blogs')
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          console.log(postData);
          return {
            title: post.title,
            content: post.content,
            id: post._id,
          };
        });
      }))
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
}
