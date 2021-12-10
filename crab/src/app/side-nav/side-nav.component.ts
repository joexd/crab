import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crab-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  hello(): void {
    console.log('hello');
  }
}
