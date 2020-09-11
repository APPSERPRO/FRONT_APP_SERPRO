import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private questionListEnpoint = 'question';


  constructor(private http: HttpClient) { }

  public getQuestionListByModule (modulo: number){
    return this.http.get(`${environment.urlQuestionApi}/${this.questionListEnpoint}/${modulo}`);
  }
}
