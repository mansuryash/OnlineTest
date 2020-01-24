import { IUser } from './IUser';
import { IQuestion } from './IQuestion';
import { Observable } from 'rxjs';
import { GenericResponse } from './GenericResponse';
import { UrlConstant } from './UrlConstant';
import { ITechnology } from './ITechnology';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, } from '@angular/common/http'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class HttpServiceService {
  genericResponse: GenericResponse;

  constructor(private httpClient: HttpClient) {

  }


  createTechnology(technology: ITechnology): Observable<GenericResponse> {

    return this.httpClient.post<GenericResponse>
      (UrlConstant.baseURL + "save-technology", technology)

  }


  getAllTechnology(): Observable<ITechnology[]> {

    return this.httpClient.get<ITechnology[]>(UrlConstant.baseURL + "get-all-technology");
  }



  saveQuesions(question: IQuestion, techId: number): Observable<GenericResponse> {

    return this.httpClient.post<GenericResponse>(UrlConstant.baseURL + `save-question/${techId}`, question);
  }


  getAllQuestionByTechId(techId: number): Observable<IQuestion[]> {

    return this.httpClient.get<IQuestion[]>(UrlConstant.baseURL + `get-questions/${techId}`);


  }


  deleteQuestion(qid: number): Observable<GenericResponse> {

    return this.httpClient.get<GenericResponse>(UrlConstant.baseURL + `delete-questions/${qid}`)

  }


  userLogin(user: IUser): Observable<GenericResponse> {

    return this.httpClient.post<GenericResponse>(UrlConstant.baseURL + `login-user`, user);

  }




  userRegister(user: IUser): Observable<GenericResponse> {

    return this.httpClient.post<GenericResponse>(UrlConstant.baseURL + `register-user`, user);

  }



  changePassword(user: IUser): Observable<GenericResponse> {

    return this.httpClient.post<GenericResponse>(UrlConstant.baseURL + `change-password`, user);

  }

}
