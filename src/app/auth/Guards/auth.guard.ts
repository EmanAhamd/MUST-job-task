import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';




export const authGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem("currentUser");
  const router = inject(Router);
  
  if(token){
    return true;
  }else{
    router.navigate(["login"]);
    return false
  }
  
};


