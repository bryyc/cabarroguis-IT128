import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})

export class ListPostsComponent {
  post?: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initData();
  }

    initData():void {
      this.http.get<Post[]>('https://localhost:7161/api/post')
      .subscribe({
        next: (data: Post[]) => {
          this.post = data;
          console.log(this.post);
        }
      })
    }
}
