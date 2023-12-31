import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/core/services/post.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent {

  constructor(private postService: PostService,
    private toastr: ToastrService){}

  addPostForm: FormGroup= new FormGroup({

    title: new FormControl(null, [Validators.required]),
    body: new FormControl(null, [Validators.required, Validators.minLength(10)])
  });

  addPost(addForm:FormGroup){
    if(addForm.valid){
      this.postService.addPost(addForm.value).subscribe( {
        next: (val:any) =>{
          console.log("creat new post res",val);
          this.toastr.info(`Added successfully`,":)", {
            closeButton: true,
            progressBar:true
          })
        },
        error: (err:any)=> {
          console.error(err);
          
        }
      })
    }
  
    
  }
}
