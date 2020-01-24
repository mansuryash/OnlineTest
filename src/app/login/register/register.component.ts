import { Router } from '@angular/router';
import { GenericResponse } from './../../GenericResponse';
import { HttpServiceService } from './../../HttpService.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  genericRes: GenericResponse;

  constructor(private formBuilder: FormBuilder,
    private httpService: HttpServiceService, private router: Router) { }

  ngOnInit() {

    this.register = this.formBuilder.group({

      name: "",
      password: ""
    });

  }

  registerUser() {
    this.httpService.userRegister(this.register.value).subscribe(res => {
      this.genericRes = res;
      alert(this.genericRes.status);
      if (this.genericRes.status == "SUCCESS") {

        this.router.navigate(["/login"])
      }

    })
  }



}
