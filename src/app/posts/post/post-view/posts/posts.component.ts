import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  allPosts:Ipost[]= []
  term:string= '';
  
  constructor(private postService: PostService){}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(res => {
      this.allPosts = res.slice(10, 25);
    })
  }
}
