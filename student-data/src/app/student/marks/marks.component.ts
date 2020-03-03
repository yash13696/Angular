import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  public subjects=['Maths','Hindi','English','Science'];
  public marks=[90,80,85,95];
  constructor() { }

  ngOnInit(): void {
  }

}
