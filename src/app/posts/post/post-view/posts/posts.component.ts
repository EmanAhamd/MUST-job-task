import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipost } from 'src/app/core/models/post';
import { AuthService } from 'src/app/core/services/auth.service';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  allPosts:Ipost[]= []
  term:string= '';
  isLogged:boolean = false;
  constructor(private postService: PostService,
    private authService:AuthService,
    private router:Router){}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(res => {
      this.allPosts = res.slice(10, 25);
    })
  }

  manageCrud(){
      this.authService.userData.subscribe(()=> {
        if( this.authService.userData.getValue() == null){
          this.isLogged = false;
          this.router.navigate(["/login"])
        }else{
          this.isLogged = true;
          this.router.navigate(["/view/managePosts"])
        }
      })
      
    }
  }

