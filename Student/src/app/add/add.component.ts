import { Component, OnInit } from '@angular/core';
import {Data} from '../data'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  sections = ["A" , "B" , "C" , "D"];
  data= new Data('',0,0,'','','',0);
  constructor() { }

  ngOnInit(): void {
  }

}
