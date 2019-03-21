import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})

export class AppareilComponent implements OnInit {
 
  @Input() appareil_name: string;
  @Input() appareil_status: string;
  @Input() post_title: string;
  @Input() post_content: string;
  @Input() post_loveIts:number;
  @Input() red_fond:string;
  @Input() green_fond:string;
  @Input() mynewcolor:string;
  constructor() { 
    this.mynewcolor = ''
  }

  ngOnInit() {
  }

  getStatusAppareil_name(){
    return this.appareil_status;
  }
  onLoveit(){
    return this.mynewcolor = 'green';
  }
  notLoveit(){
    return this.mynewcolor = 'red'
  }
}
