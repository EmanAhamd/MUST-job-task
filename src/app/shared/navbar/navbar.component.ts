import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from 'src/app/core/services/auth.service';
Router
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isLogged:boolean = false;
  
  constructor(
    public authService:AuthService,
    private router:Router){

    authService.userData.subscribe(()=> {
      if( authService.userData.getValue() == null){
        this.isLogged = false;
      }else{
        this.isLogged = true; 
      }
    })
    
  }
  ngOnInit(): void {
   

  }


  logout(){
    const confirmation = confirm("Do yo want to logout?");
    if(confirmation){
      localStorage.removeItem("currentUser");
      this.isLogged = false;
      this.router.navigate(['/login'])
    }
    
  }


  
}
