import { BrowserModule } from '@angular/platform-browser';
import { GenericResponse } from './../GenericResponse';
import { IQuestion } from './../IQuestion';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpServiceService } from './../HttpService.service';
import { ITechnology } from './../ITechnology';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  disabled: boolean = true;
  selectedValue: number;
  technologyList: ITechnology[];
  questionList: IQuestion[];
  genericResponse: GenericResponse;

  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
    this.getAllTechnology();
  }

  getAllTechnology() {

    this.httpService.getAllTechnology().subscribe(list => {

      this.technologyList = list;
    });


  }

  getQuestions() {
    console.log("selected value=" + this.selectedValue);

    this.httpService.getAllQuestionByTechId(this.selectedValue).subscribe(list => {

      this.questionList = list;
    });
  }

  deleteQuestion(question: IQuestion) {

    this.httpService.deleteQuestion(question.id).subscribe(res => {

      this.genericResponse = res;
      console.log("delete=" + this.genericResponse);
      this.getQuestions();

    })


  }

  updateQuestion(question: IQuestion, techId: number) {
    if (this.disabled == true) {

      this.disabled = false;
    }
    else {

      this.httpService.saveQuesions(question, techId).subscribe(res => {

        this.genericResponse = res;
        this.disabled = true;
      });
    }

  }

  isDisabled(): boolean {

    return this.disabled;

  }
}