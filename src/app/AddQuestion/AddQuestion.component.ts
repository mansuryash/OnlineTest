import { GenericResponse } from './../GenericResponse';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ITechnology } from './../ITechnology';
import { HttpServiceService } from './../HttpService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-AddQuestion',
  templateUrl: './AddQuestion.component.html',
  styleUrls: ['./AddQuestion.component.css']
})
export class AddQuestionComponent implements OnInit {
  addQuestion: FormGroup;
  techId: any;
  technologyList: ITechnology[];
  genericResponse: GenericResponse;
  isSelected: boolean;
  constructor() {

  }
  constructor(private httpService: HttpServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllTechnology();

    this.addQuestion = this.formBuilder.group({

      title: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      rightOption: "",
      tech: ""

    });
    this.isSelected = true;

  }

  submitQuestionData() {
    this.techId = this.addQuestion.get("tech").value;
    console.log("TechId=" + this.techId);

    this.httpService.saveQuesions(this.addQuestion.value, this.techId).subscribe(res => {


      this.genericResponse = res;
      this.addQuestion.reset("");
    });


  }

  getAllTechnology() {

    this.httpService.getAllTechnology().subscribe(res => {
      this.technologyList = res;
      this.isSelected = true;

    });

  }

}
