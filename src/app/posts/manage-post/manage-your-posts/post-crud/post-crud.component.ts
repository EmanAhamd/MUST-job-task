import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/services/post.service';


@Component({
  selector: 'app-post-crud',
  templateUrl: './post-crud.component.html',
  styleUrls: ['./post-crud.component.css']
})
export class PostCrudComponent implements OnInit {

    posts:Ipost[]= []
  constructor(private postService:PostService){}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(res => {
      this.posts = res.slice(10, 20);
    })
  }

  


}
