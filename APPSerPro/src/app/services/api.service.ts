import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private rutaAPi = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  public get (url:String, modulo?:String){
    return this.http.get(`${this.rutaAPi}/${url}/2`);
  }
}
