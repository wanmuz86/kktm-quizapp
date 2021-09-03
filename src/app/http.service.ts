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

  sendScore(data){
    return this.httpClient.post(
      'https://api.sheety.co/4db58997dd33ab7eaa3d621c48bdea06/markah/sheet1',
      data
    )
  }
  getAllScores(){
    return this.httpClient.get('https://api.sheety.co/4db58997dd33ab7eaa3d621c48bdea06/markah/sheet1')
  }
}
