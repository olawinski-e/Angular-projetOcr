import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'projet angular ocr';
  secondes: number;
  counterSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Oh, an error occured! :' + error);
      },
      () => {
        console.log('Observable complete');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
