import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/login/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi-auth',
  templateUrl: './navi-auth.component.html',
  styleUrls: ['./navi-auth.component.css']
})
export class NaviAuthComponent implements OnInit {

  constructor(private authService:AuthService,private localStorageService:LocalStorageService
    ,private router:Router) { }

  authStatus:boolean = false;
  fullName:any = "";
  ngOnInit(): void {
    this.isAuth();

  }
  isAuth(){
    this.authStatus =  this.authService.isAuthenticated();
    if(this.authStatus){
        this.fullName = (localStorage.getItem("fullName") !== null)? localStorage.getItem("fullName") : " ";
    }
  }
  logout(){
    this.localStorageService.clear();
    this.isAuth();
    this.router.navigate(['/']);
  }

}