import { Component, inject, OnInit, signal } from '@angular/core';
import { IPost, PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {

  constructor(private postService: PostService) { }
  // OR
  // private postService = inject(PostService);


  posts = signal<IPost[]>([]);

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts.set(data.slice(0, 9))
    })
  }



}
