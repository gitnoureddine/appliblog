import { Component, Input } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lastupdate = new Promise(
    // tslint:disable-next-line:no-shadowed-variable
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );
  posts = [
    {
      title: 'Mon Premier post' ,
      // tslint:disable-next-line:max-line-length
      content: 'Bonus : créez un type pour les post, appelé Post, afin de rendre votre code plus lisible.  Vous pouvez même y intégrer un constructeur qui attribue automatiquement la date !',
      loveIts: '1',
      created_at: Date
    },
    {
      title: 'Mon Deuxième post' ,
      // tslint:disable-next-line:max-line-length
      content: 'Bonus : créez un type pour les post, appelé Post, afin de rendre votre code plus lisible.  Vous pouvez même y intégrer un constructeur qui attribue automatiquement la date !',
      loveIts: '0',
      created_at: Date
    },
    {
      title: 'Encore un post' ,
      // tslint:disable-next-line:max-line-length
      content: 'Bonus : créez un type pour les post, appelé Post, afin de rendre votre code plus lisible.  Vous pouvez même y intégrer un constructeur qui attribue automatiquement la date !',
      loveIts: '3',
      created_at: Date
    },
    {
      title: 'Encore un post' ,
      // tslint:disable-next-line:max-line-length
      content: 'Bonus : créez un type pour les post, appelé Post, afin de rendre votre code plus lisible.  Vous pouvez même y intégrer un constructeur qui attribue automatiquement la date !',
      loveIts: '3',
      created_at: Date
    },
  ];

  isAuth = false;

  constructor() {  }

}
