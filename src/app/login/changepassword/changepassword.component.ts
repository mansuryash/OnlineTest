import { Router } from '@angular/router';
import { GenericResponse } from './../../GenericResponse';
import { HttpServiceService } from './../../HttpService.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  genericRes: GenericResponse;
  changePass: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpService: HttpServiceService,
    private router: Router) { }

  ngOnInit() {

    this.changePass = this.formBuilder.group({

      name: "",
      password: "",
      newPassword: ""

    });
  }

  changePassword() {
    this.httpService.changePassword(this.changePass.value).subscribe(res => {

      this.genericRes = res;

      alert(this.genericRes.status);

      if (this.genericRes.status == "SUCCESS") {

        this.router.navigate(["login"])
      }

    });


  }

}
