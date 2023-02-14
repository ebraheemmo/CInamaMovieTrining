import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserModel } from '../Models/Users/user-model/user-model.module';


import { RegesterservicesService } from '../services/regesterservices.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

//  Users:any;
  baseUrl= "http://localhost:53428/Account/";
  constructor(private service:RegesterservicesService,private http:HttpClient) { }

  getUsers!: FormGroup;
 Users:UserModel[];
  ngOnInit():void{


    this.GetAlluser();
  }

getall(){

  this.GetAlluser();

}

  GetAlluser(){
this.http.get<UserModel[]>(this.baseUrl+'GetAllUser').subscribe(Response=>{
  console.log(Response);
  this.Users=Response;

});
}
}
