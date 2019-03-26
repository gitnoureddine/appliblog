import { Component, OnInit, Input } from '@angular/core';
import { post } from '../../../node_modules/@types/selenium-webdriver/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  @Input() created_date: Date;
  @Input()  toto_date: Date;

  // tslint:disable-next-line:variable-name
  @Input() post_title: string;
  // tslint:disable-next-line:variable-name
  @Input() post_content: string;
  @Input() loveIts: number;
  @Input() notoveIts: number;
  @Input() appareilStatus: string;
  mynewcolor: string;
  constructor() {
    this.mynewcolor = this.newMethod();
    this.loveIts = 0;
    this.appareilStatus = 'allumé';
  }

  private newMethod(): string {
    return '';
  }

  ngOnInit() {
  }

date_du_jour() {
  this.toto_date = this.created_date;

}

  compteurLoveit() {
   this.date_du_jour();
   this.loveIts = this.loveIts + 1;
  //  console.log(this.loveIts);
   if (this.loveIts > 0 ) {
  // console.log('green');
  } else {
  // console.log('red');
  }
  }

  compteurNotLoveit() {
    this.date_du_jour();
    this.loveIts = this.loveIts - 1;
    // console.log(this.loveIts);
    if (this.loveIts > 0 ) {
      console.log('green');
    } else {
      // console.log('red');
    }
    }

}
