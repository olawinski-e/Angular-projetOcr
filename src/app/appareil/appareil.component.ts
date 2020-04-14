import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss'],
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {}

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allume') {
      return 'green';
    } else if (this.appareilStatus === 'eteint') {
      return 'red';
    }
  }

  onSwitch() {
    if (this.appareilStatus === 'allume') {
      this.appareilService.switchOffOne(this.index);
      console.log('hello');
    } else if (this.appareilStatus === 'eteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
