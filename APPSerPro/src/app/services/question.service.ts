import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  public getId (endpoint: string ,modulo: number){
    return this.http.get(`${environment.urlQuestionApi}/${endpoint}/${modulo}`);
  }

  public get (endpoint: string){
    return this.http.get(`${environment.urlQuestionApi}/${endpoint}`);
  }
}
