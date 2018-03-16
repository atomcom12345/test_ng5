import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  itemCount:number=4
  itemxxx:string=' new buttom'
  goalText:string='My first life goal'
//กำหนดตัวแปร array
goals = [];

  constructor() { }

  ngOnInit() {
  }

  xadditem(){
    this.goals.push(this.goalText);
    this.goalText = '';
  }

}
