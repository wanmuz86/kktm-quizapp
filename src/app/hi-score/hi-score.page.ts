import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-hi-score',
  templateUrl: './hi-score.page.html',
  styleUrls: ['./hi-score.page.scss'],
})
export class HiScorePage implements OnInit {

  scores 
  constructor(public httpService:HttpService) {

   }

  ngOnInit() {
    this.httpService.getAllScores().subscribe(resp=>{
      let markah = resp["sheet1"]
      markah.sort((a,b)=>{
        if (a["score"] > b["score"]){
          return -1
        }
        else if (a["score"]< b["score"]){
          return 1
        }
        else {
          if (a["timer"] < b["timer"]){
            return -1;
          }
          else if (a["timer"] > b["timer"]){
            return 1
          }
          else {
            return 0
          }
        }
      })
      this.scores = markah.splice(0,5)
    }, err=>{

    })
  }

}
