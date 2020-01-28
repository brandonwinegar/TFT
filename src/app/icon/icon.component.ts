import { champion } from './../interfaces';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  // @Output() onClick = new EventEmitter();
  @Input() champ: champion;
  constructor(private Http: HttpClient) { }

  ngOnInit() {
  }

}