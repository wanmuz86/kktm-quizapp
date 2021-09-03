import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  score
  student
  timer
  constructor(public httpService:HttpService, public toastController: ToastController) { }

  ngOnInit() {
    this.score = localStorage.getItem("score");
    this.student = JSON.parse(localStorage.getItem("studentInfo"))
    this.timer = JSON.parse(localStorage.getItem("timer"))

    localStorage.removeItem("score");
    localStorage.removeItem("timer");
    localStorage.removeItem("studentInfo");

    // panggil API hantar markah...
    const data = {
      "sheet1":{
        "name":this.student.name,
        "kelas":this.student.kelas,
        "score":this.score,
        "time":(new Date()),
        "timer":this.timer
      }
    }

    this.httpService.sendScore(data).subscribe(async resp=>{
      const toast = await this.toastController.create({
        message: 'Markah telah dihantar ke guru.',
        duration: 2000
      });
      toast.present();

    }, err=>{

      console.log(err)
    })
  }

}
