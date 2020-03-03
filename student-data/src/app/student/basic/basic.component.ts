import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  public name: string=' ABC';
  public standard: number=6;
  public section:string=' A';
  public sex:string=' M';
  constructor() { }

  ngOnInit(): void {
  }

}
