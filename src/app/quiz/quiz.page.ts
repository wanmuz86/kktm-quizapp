import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  //array ..
  questions
  options
  constructor(public router:Router, public httpService:HttpService) { }

  ngOnInit() {
    this.httpService.getAllQuestions().subscribe(resp=>{
      // resp adalah object... [""] , . 
      // resp.results adalah array [index] atau ngFor
      console.log(resp)
      this.questions = resp["results"];
      this.options = this.questions[0]["incorrect_answers"]
      this.options.push(this.questions[0]["correct_answer"]);
      console.log(this.options)


    },err=>{
      console.log(err);
    })
  }
  checkAnswer(){
    this.router.navigate(['/score'])

  }
}
