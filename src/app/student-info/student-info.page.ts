import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.page.html',
  styleUrls: ['./student-info.page.scss'],
})
export class StudentInfoPage implements OnInit {
studentInfo = {
  name:'',
  kelas:''
}
  constructor(public router:Router) { }

  ngOnInit() {
  }

  mulaPressed(){
    if (this.studentInfo.name === "" || this.studentInfo.kelas === ""){
      alert("Please fill in the form first");
    }
    else {
      localStorage.setItem("studentInfo",JSON.stringify(this.studentInfo));
      this.router.navigate(['/quiz']);

    }
  }

}
