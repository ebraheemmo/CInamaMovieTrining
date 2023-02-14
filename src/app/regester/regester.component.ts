import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { regestrsModel } from '../Models/regestrs_Model.model';
import { UserModel } from '../Models/Users/user-model/user-model.module';


import { RegesterservicesService } from '../services/regesterservices.service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})


export class RegesterComponent implements OnInit {
  submitted = false;
  isbusy:boolean;
  confirmpass:boolean;


  constructor(private fb: FormBuilder, private service: RegesterservicesService, private route: Router
    , private http: HttpClient) { }


 ismessagevalidate={
   UserName:{
    required:'User Name is required',
    validate:'User Name is invalid',
    ismuch:'',
   },
   Email:{
    required:'Email is required',
    validate:'Email is invalid',
    ismuch:'',
   },
   Passwordconf:{
    style:"display:none;"
   }


 };





  userform: FormGroup = new FormGroup({


    Email: new FormControl(''),
    UserName: new FormControl(''),
    Password: new FormControl(''),
    Passwordconf:new FormControl('')
    // confPassword:new FormControl(''),
  });
  Users: UserModel[];
  reg: regestrsModel;
  ngOnInit(): void {

   this.isbusy=false;
    this.userform = this.fb.group({

      Email: ['', [Validators.required, Validators.email]],
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      Passwordconf :  ['', Validators.required]
    });
    this.reg = {
      Email: '',
      UserName: '',
      Password: '',
    };
    this.userform.valueChanges.subscribe(x=>{
    if(this.userform.status=='VALID') {
      console.log('form valid');
      this.isbusy=true;

    }

    },ex=>console.log(ex.error));

    if(this.userform.value.Password==''){


    }


  }

  onSubmit() {

    this.IscheckUserNameExis();
    this.submitted = true;
    if (this.userform.valid) {
      this.Registertion();
      this.service.Register(this.reg).subscribe(sucss => {
        console.log(sucss);
        console.log(this.userform.value);
        console.log('welcom');
        this.route.navigate(['RegesterConf']);
        //console.log(succes);

      }, err => {

      });


    }
  }


  get f() {
    return this.userform.controls;
  }
g(){
  return this.userform.value.UserName;
}


  RegesterValidateModel() {

    // this.reg.UserName=this.userform.value.UserName;
    this.reg.Email = this.userform.value.email;
    this.reg.Password = this.userform.value.Password;

  }


  IscheckUserEmailExis() {

    const email = this.userform.value.Email;
    if (email != null && email != '' && this.isbusy===false) {
     this.service.GetEmailExist(email).subscribe(succ=>{

      this.ismessagevalidate.Email.ismuch='This Email is  Exist';
       console.log('This Email is  Exist');
     },err=>console.log(err.error));


        }
  }
  IscheckUserNameExis() {

    const username = this.userform.value.UserName;
    if (username != null && username != '' && this.isbusy===false) {
      this.service.GetNameExist(username).subscribe(x=>{

        console.log('This Name is  Exist');
     },err=>console.log(err.error));


    }



  }




  Registertion() {

    this.reg.Email = this.userform.value.Email;
    this.reg.UserName = this.userform.value.UserName;
    this.reg.Password = this.userform.value.Password;
  }
}



