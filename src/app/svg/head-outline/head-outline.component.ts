import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-outline',
  templateUrl: './head-outline.component.html',
  styleUrls: ['./head-outline.component.css']
})
export class HeadOutlineComponent implements OnInit {

  @Input() shape: string;

  constructor() { }

  ngOnInit() {
  }

}
