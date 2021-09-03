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
  counter = 0
  score = 0;
  currentQuestion =""
  startTime;
  endTime;
  constructor(public router:Router, public httpService:HttpService) { }

  ngOnInit() {
    this.httpService.getAllQuestions().subscribe(resp=>{
      // resp adalah object... [""] , . 
      // resp.results adalah array [index] atau ngFor
      console.log(resp)
      this.questions = resp["results"];
      this.loadAnswers()
      this.startTime = new Date()
    },err=>{
      console.log(err);
    })
  }
  checkAnswer(option){
    if (option === this.questions[this.counter]["correct_answer"]){
    //  alert("Jawapan anda tepat")
      this.score++
    }
    else {
    //  alert("Jawapan anda tidak tepat")
    }
    if (this.counter === this.questions.length-1){
      this.endTime = new Date()
      let timer = (this.endTime - this.startTime) / 1000;
      localStorage.setItem("timer",timer.toString());
      localStorage.setItem("score",this.score.toString())
      this.router.navigate(['/score'])
    }
    else {
    this.counter++
    this.loadAnswers();
    }
    

  }

  loadAnswers(){
    this.currentQuestion = (this.questions[this.counter].question).replace(/&quot;/g, '"').replace(/&#039;/g, "'");
    this.options = this.questions[this.counter]["incorrect_answers"]
    this.options.push(this.questions[this.counter]["correct_answer"]);
    this.options = this.options.map(val=>{
      return val.replace(/&quot;/g, '"').replace(/&#039;/g, "'")
    })
    this.options = this.shuffleArray(this.options);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
  }
  
}

