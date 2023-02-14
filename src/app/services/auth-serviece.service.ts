import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CryptService } from './crypt.service';
import { RegesterservicesService } from './regesterservices.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServieceService {

  baseUrl = "http://localhost:53428/Account/";
  constructor(private services: RegesterservicesService, private http: HttpClient,private cry:CryptService) { }

  public InstailStorage(rem: boolean, Email: string) {
    //const rem=this.Loginform.value.RemamberMe;
    const day = new Date();
    if (rem) {
      day.setDate(day.getDate() + 10);
    } else {
      day.setDate(day.getMinutes() + 3);
    }

    localStorage.setItem('Email',this.cry.Encrypt(Email));///this.cry.Encrypt(Email)
    localStorage.setItem('Exper', this.cry.Encrypt(day.toString()));//this.cry.Encrypt(day.toString())
    this.RollUaer(Email).subscribe(success => {
      localStorage.setItem('rol',  this.cry.Encrypt(success));//this.cry.Encrypt(success)
    }, e => console.log(e));


  }
  RollUaer(Email: string) {
    return this.http.get(this.baseUrl + 'GetRollName/' + Email, { responseType: 'text' }).pipe();

  }

}
