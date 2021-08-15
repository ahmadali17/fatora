import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cooperatives',
  templateUrl: './cooperatives.component.html',
  styleUrls: ['./cooperatives.component.scss']
})

export class CooperativesComponent implements OnInit {
  rows:any = [];
  colorsArr:any;
  isPressed: boolean = false;
  counter: number = 0;

  constructor(){
    
  }

  pass(){
    this.counter ++;
  }

  genMat(){
    for( let i=0;i<5;i++){
      var arr = [...Array(5)].map(e=>~~Math.floor(Math.random() * 100))
      this.rows.push(arr);
    }
  }

  genColors(){
      this.colorsArr = [...Array(25)].map(e=>~~Math.floor(Math.random() * 3))
  }
  ngOnInit(): void {
    this.genMat()
  }
}
