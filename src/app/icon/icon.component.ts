import { champion } from './../interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() champ: champion;
  constructor() { }

  ngOnInit() {
  }

}