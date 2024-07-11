import { Component, Input } from '@angular/core';
import { Message } from '../Store/Reducer/shared.reducer';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {


  @Input()
  msg: Message | null = null;

  afterClose(): void {
    console.log('close');
  }
}
