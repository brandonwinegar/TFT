import { trait } from './../interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trait',
  templateUrl: './trait.component.html',
  styleUrls: ['./trait.component.css']
})
export class TraitComponent implements OnInit {
  @Input() trait: trait;
  activated: number;
  constructor() { }

  ngOnInit() {
    
  }
}
