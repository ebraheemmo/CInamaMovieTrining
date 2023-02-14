import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegesterservicesService } from '../services/regesterservices.service';

@Component({
  selector: 'app-registeration-confirm',
  templateUrl: './registeration-confirm.component.html',
  styleUrls: ['./registeration-confirm.component.css']
})
export class RegisterationConfirmComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private serve: RegesterservicesService
    ) { }

  ngOnInit() {

    this.activateRoute.queryParams.subscribe(Param => {
      const id = Param['ID'];
      const token = Param['Token'];
      if (id && token) {
        console.log('success');
        console.log('id=' + id + 'token=' + token)
        this.serve.RegesterConf(id, token).subscribe(x => {
          alert()
          console.log('success');
        }, ex => console.log(ex));


      }

    }, ex => console.log(ex));

  }



// RegesterConf(id: String, token: String) {

//   return this.http.get(this.baseUrl + 'RegisterationConfirm?ID=' + id + '&Token=' + token).pipe();
// }

}

