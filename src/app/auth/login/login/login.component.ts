import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService:AuthService,
    private router:Router
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


        },
        error: (err:any)=> {
          console.log(err.error.message,": username or password is incorrect");
          
        }
      })
    }
  }


}
