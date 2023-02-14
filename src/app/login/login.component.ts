import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, RadioControlValueAccessor, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUserModel } from '../Models/Users/login-user-model/login-user-model.module';
import { AuthServieceService } from '../services/auth-serviece.service';
import { CryptService } from '../services/crypt.service';


// import { UserModel } from '../Models/user/userModel.module';

import { RegesterservicesService } from '../services/regesterservices.service';
// let httpHeaders = new HttpHeaders({
//   'Content-Type': 'application/json',
//   'Cache-Control': 'no-cache'
// }
// )
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  restorpss = {
    emailer: String

  }




  imageUrl: string = '/assets/Image/backgrnd.jpg';
  loginMo: LoginUserModel;
  submitted = false;
  showform: boolean = false;
  hidfrmlogin: boolean = true;
  Frmenternewpass: boolean = false;
  constructor(private encrept:CryptService,private fb: FormBuilder, private services: RegesterservicesService,
    private route: Router, private http: HttpClient, private auth: AuthServieceService) { }

  invmassiage = {
    email: {
      patt: "The Email incorect"
    }
  }


  Loginform: FormGroup
    = new FormGroup({

      Email: new FormControl(''),
      Password: new FormControl(''),
      RemamberMe: new FormControl(''),

    });

  ////forget form
  forgetform: FormGroup = new FormGroup({
    Email: new FormControl(''),


    // confPassword:new FormControl(''),
  });


  baseUrl = "http://localhost:53428/Account/";

  ngOnInit(): void {
    // this.setimagebackgrounf();
    this.Loginform = this.fb.group({

      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      RemamberMe: '',


    });

    this.loginMo = {
      Email: '',
      Password: '',
      RemamberMe: false,
    };

    this.forgetform = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
    });

  }
  // setimagebackgrounf() {
  //   $('body').css({
  //     'background-image':'url('+this.imageUrl+')',
  //     'background-repated':'no-repated',
  //     'baxkground-size':'cover'

  //   })

  // }



  onsubmit() {


    console.log(this.Loginform.value);

    this.submitted = true;
    this.LoginUserFun();

  }
  get f() {
    return this.Loginform.controls;
  }



  LoginUserFun() {


    if (this.Loginform.valid) {
      this.valdateLoginUser();
      this.services.LoginUser(this.loginMo).subscribe(success => {
        const rem = !!this.Loginform.value.RemamberMe;
        const email = this.Loginform.value.Email;
        this.auth.InstailStorage(rem, email);
        this.route.navigate(['Home']);
        // this.route.navigateByUrl('http://localhost:4200/Home')
        alert('تم تسجيل الدخول بنجاح');




      }, err => {
        console.log(err);

      });
    }
  }

  RestorPaswrd() {
    this.submitted = true;
    const emailre = this.restorpss.emailer = this.forgetform.value.Email;

    if (this.forgetform.valid) {
      this.validemilrestor();
      if (emailre !== '' || emailre !== null) {
        this.services.ForgetPassword(emailre).subscribe(x => {

          var i = 0;
          var exist = false;
          var token = Object.values(x).toString();
          while (localStorage.getItem('token' + i) !== null) {
            i++;
            if (localStorage.getItem('token' + i) === null) {
              localStorage.setItem('token' + i, this.encrept.Encrypt(token));
              exist = true;
              break;
            }



          }
          if (!exist) {
            localStorage.setItem('token' + i, this.encrept.Encrypt(token));
          }

          //  var token = Object.values(x).toString();
          console.log(token);
        //  localStorage.setItem('token', token);
          console.log('If this Email correct we send message to you');
          this.route.navigate(['Resetpassword']);
        }, ex => { console.log(ex.error); }
        );

      }
    }


  }

  validemilrestor() {
    this.restorpss.emailer = this.forgetform.value.Email;
  }

  valdateLoginUser() {
    this.loginMo.Email = this.Loginform.value.Email;
    this.loginMo.Password = this.Loginform.value.Password;
    this.loginMo.RemamberMe = this.Loginform.value.RemamberMe;
  }

  showresetpas() {
    this.showform = !this.showform;
    this.hidfrmlogin = !this.hidfrmlogin;

  }

  Gotofrmpassnew() {
    this.Frmenternewpass = !this.Frmenternewpass;
    this.showform = !this.showform;

  }

}



