import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService:AuthService,
    private router:Router,
    private toastr: ToastrService
    ){}

  loginForm: FormGroup= new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });


  login(loginForm:any){

    if(loginForm.valid){

      this.authService.login(loginForm.value).subscribe( {
        next: (val:any) =>{

          this.router.navigate(['/view/managePosts']);
          localStorage.setItem("currentUser", val.token);
          this.authService.currentUserData();

          this.toastr.success(`logged in successfully`,"Success", {
            closeButton: true,
            progressBar:true
          })

        },
        error: (err:any)=> {
          this.toastr.error("username or password is incorrect",err.error.message, {
            closeButton: true,
            progressBar:true
          }); 
        }

      })
    }
    this.loginForm.reset();
  }


}
