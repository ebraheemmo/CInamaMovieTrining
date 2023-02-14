import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { from } from 'rxjs';
import { RegesterComponent } from '../regester/regester.component';
import { RegesterservicesService } from '../services/regesterservices.service';
declare var $:any;


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  baseUrl= "http://localhost:53428/Account/";
  constructor( private service:RegesterservicesService,private http:HttpClient,private  route:Router) { }

  ngOnInit(): void {

  }

  Logout(){
    this.http.get(this.baseUrl+'Logout').subscribe(logoutsuccess=>{
    localStorage.removeItem('Email');
    localStorage.removeItem('Exper');
    localStorage.removeItem('rol');
      this.route.navigate(['Home']);
      console.log('logout success');
    },err=>console.log(err))
  }
  IsUserRegestered(){
    const email=!!localStorage.getItem('Email');
    const Exper=!!localStorage.getItem('Exper');
    const rol=!!localStorage.getItem('rol');
    if(email&&Exper&&rol){
      return true;
    }
    else{
      return false;
    }

  }








}
