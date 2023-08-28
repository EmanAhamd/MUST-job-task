import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable , BehaviorSubject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any = new BehaviorSubject(localStorage.getItem("currentUser"))

  constructor(private http:HttpClient) { }

  login(userData:object):Observable<any>{
    return this.http.post("https://dummyjson.com/auth/login", userData)
  }

  currentUserData(){
    let token:any = localStorage.getItem("currentUser");
    let decotedToken = jwtDecode(token);

    this.userData.next(decotedToken);
    
  }


}
