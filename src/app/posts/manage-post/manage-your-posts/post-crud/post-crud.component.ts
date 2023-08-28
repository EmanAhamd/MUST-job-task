import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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


  editPostForm: FormGroup= new FormGroup({
    title: new FormControl(null, [Validators.required]),
    body: new FormControl(null, [Validators.required, Validators.minLength(10)])
  });

  editPost( post:any){
    this.editPostForm.patchValue({
      title:post.title,
      body: post.body
    })
  }


    updatePost(id:any){

      this.postService.updatePost(id, this.editPostForm.value).subscribe( {
        next: (val:any) =>{
          alert("Updated successfully")
          console.log("Post updated to",val);
        },
        error: (err:any)=> {
          console.error(err);
          
        }
      })
    }

 
    
    deletePost(id:any){
      this.postService.deletePost(id).subscribe(res => {
  
           this.posts = this.posts.filter(post => post.id !== id);
  
           alert('Post deleted successfully!');
  
           console.log("Deleted post id", id);
      })
    }
  

}
