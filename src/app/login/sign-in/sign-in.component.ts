import { Router } from '@angular/router';
import { GenericResponse } from './../../GenericResponse';
import { HttpServiceService } from './../../HttpService.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signIn: FormGroup;
  genericRes: GenericResponse;

  constructor(private formBuilder: FormBuilder,
    private httpService: HttpServiceService, private router: Router) {

  }

  ngOnInit() {

    this.signIn = this.formBuilder.group({

      name: "",
      password: ""

    })
  }


  login() {

    this.httpService.userLogin(this.signIn.value).subscribe(res => {

      this.genericRes = res;
      alert(this.genericRes.status);
      if (this.genericRes.status == "SUCCESS") {


        this.router.navigate(['/home']);
      }

    });


  }

}
