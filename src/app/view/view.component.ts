import { AddQuestionComponent } from './../AddQuestion/AddQuestion.component';
import { GenericResponse } from './../GenericResponse';
import { HttpServiceService } from './../HttpService.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  addTechnology: FormGroup;
  genericResponse: GenericResponse;

  ngOnInit() {
    this.addTechnology = this.formBuilder.group({ title: "" });
  }
  constructor(private httpService: HttpServiceService, private formBuilder: FormBuilder,
    private router: Router) {

  }

  submitData(addQuestion: AddQuestionComponent) {
    this.httpService.createTechnology(this.addTechnology.value).subscribe(res => {

      this.genericResponse = res;
      console.log(this.genericResponse);
      addQuestion.getAllTechnology();

      // this.router.navigate(["/view"]);
      this.addTechnology.reset("");
    }
    );
  }


}
