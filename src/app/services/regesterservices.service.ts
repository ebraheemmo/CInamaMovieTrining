import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { regestrsModel } from '../Models/regestrs_Model.model';
import { ResatePasswrdModelModule } from '../Models/resate-passwrd-model/resate-passwrd-model.module';
import { ChngPaswrdModelModule } from '../Models/Users/chng-paswrd-model/chng-paswrd-model.module';
import { LoginUserModel } from '../Models/Users/login-user-model/login-user-model.module';
import { UserModel } from '../Models/Users/user-model/user-model.module';



@Injectable({
  providedIn: 'root'
})
export class RegesterservicesService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:53428/Account/";
  /////Register
  Register(reg: regestrsModel): Observable<regestrsModel> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
    );
    return this.http.post<regestrsModel>(this.baseUrl + 'Regester', reg, { headers: httpHeaders }).pipe();
  }

  LoginUser(loginMo: LoginUserModel): Observable<LoginUserModel> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    return this.http.post<LoginUserModel>(this.baseUrl + 'loginUser', loginMo, { headers: httpHeaders }).pipe();
  }
  RollUaer(Email: string) {
    return this.http.get(this.baseUrl + 'GetRollName/' + Email, { responseType: 'text' }).pipe();

  }
   RegesterConf(id: string, token: string) {

    return this.http.get(this.baseUrl + 'RegisterationConfirm?ID=' + id + '&Token=' + token).pipe();
  }
  getUserLis(){
   return this.http.get<UserModel[]>(this.baseUrl+'GetAllUser').pipe();
  }
  GetEmailExist(email:string){
    return this.http.get(this.baseUrl+'GetExistEmail?Email='+email).pipe();
  }
  GetNameExist(username:string){
    return this.http.get(this.baseUrl+'GetExistUserName?UserName='+username).pipe();
  }
  changPass(chgmodl: ChngPaswrdModelModule):Observable<ChngPaswrdModelModule>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    return this.http.post<ChngPaswrdModelModule>(this.baseUrl+'ChangePassword',chgmodl,{headers:httpHeaders}).pipe();
  }
  ForgetPassword(emailre: string) {
    return this.http.get(this.baseUrl + 'ForgetPassword/' + emailre, { responseType: 'text' }).pipe();

  }

  ApiResatePass(passMModel:ResatePasswrdModelModule): Observable<ResatePasswrdModelModule> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    return this.http.post<ResatePasswrdModelModule>(this.baseUrl + 'RestorPassword',passMModel , { headers: httpHeaders }).pipe();
  }
}












