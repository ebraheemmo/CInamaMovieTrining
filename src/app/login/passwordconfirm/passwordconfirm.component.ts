import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { ResatePasswrdModelModule } from 'src/app/Models/resate-passwrd-model/resate-passwrd-model.module';
import { ChngPaswrdModelModule } from 'src/app/Models/Users/chng-paswrd-model/chng-paswrd-model.module';
import { LoginUserModel } from 'src/app/Models/Users/login-user-model/login-user-model.module';
import { CryptService } from 'src/app/services/crypt.service';
import { RegesterservicesService } from 'src/app/services/regesterservices.service';

@Component({
  selector: 'app-passwordconfirm',
  templateUrl: './passwordconfirm.component.html',
  styleUrls: ['./passwordconfirm.component.css']
})
export class PasswordconfirmComponent implements OnInit {
  submitted=false;

  passMModel: ResatePasswrdModelModule;
  cgangPassModel = {
    NewPassword: String,
    ConfirmPassword: String
  };
  id: String;
  token: String;

  formlog: LoginComponent;
  chgmodl: ChngPaswrdModelModule;
  constructor(private encrept:CryptService,
    private fb: FormBuilder,
    private server: RegesterservicesService, private activateRoute: ActivatedRoute, private rout: Router
  ) { }

  Formresetpass: FormGroup = new FormGroup({

    NewPassword: new FormControl(''),
    ConfirmPassword: new FormControl(''),

    // confPassword:new FormControl(''),
  });

  ngOnInit() {

    this.Formresetpass = this.fb.group({

      NewPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
      ConfirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
    this.passMModel = {
      id: '',
      token: '',
      NewPassword: '',
    }



    this.activateRoute.queryParams.subscribe(Param => {
      var exset=false;
      this.passMModel.id = Param['ID'];
      this.passMModel.token = Param['Token'];
      if (this.passMModel.id && this.passMModel.token) {
        var keys=Object.keys(localStorage);

        keys.forEach(element => {
          if(element!==null&&element.includes('token')){
          var item=localStorage.getItem(element);

          if(item!==null){
            var token=this.encrept.Decrypt(item);
            if(token=== this.passMModel.token){
              exset=true;
              return;
            }
            }

          }

        });

        if (!exset) {
          this.rout.navigate(['Home']).then(x => { window.location.reload });
        }
        console.log('id=' + this.passMModel.id + 'token=' + this.passMModel.token)

      }
      // else {
      //   this.rout.navigate(['Home']).then(x => { window.location.reload });
      // }

    }, ex => console.log(ex));
  }
  get f(){
    return this.Formresetpass.controls;
  }


  onsubmit() {
    this.submitted=true;
    if (this.Formresetpass.value.NewPassword !== null) {
      this.passMModel.NewPassword = this.Formresetpass.value.NewPassword;
      this.server.ApiResatePass(this.passMModel).subscribe(x => {
        console.log('sucsess');
      }, ex => console.log(ex.error));

    }

  }
  // ForgetVaild() {

  //   this.cgangPassModel.NewPassword=this.Formresetpass.value.NewPassword;
  //   this.cgangPassModel.ConfirmPassword=this.Formresetpass.value.ConfirmPassword;


  // }

}
