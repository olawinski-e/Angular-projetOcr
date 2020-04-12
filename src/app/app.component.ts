import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projet angular ocr';
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  appareils = [
    {
      name: 'Machine à laver',
      status: 'eteint',
    },
    {
      name: 'Frigo',
      status: 'allume',
    },
    {
      name: 'Ordinateur',
      status: 'eteint',
    },
  ];

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  onAllumer() {
    console.log('on allume tout!');
  }
}
