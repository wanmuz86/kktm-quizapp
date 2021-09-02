import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient:HttpClient) { }

  getAllQuestions(){
    return this.httpClient.get('https://opentdb.com/api.php?amount=10&category=18')
  }
}
