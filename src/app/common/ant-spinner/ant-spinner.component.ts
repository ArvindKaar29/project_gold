import { Component, Input } from '@angular/core';
import { AntSpinnerService } from '../ant-spinner.service';

@Component({
  selector: 'app-ant-spinner',
  templateUrl: './ant-spinner.component.html',
  styleUrls: ['./ant-spinner.component.css']
})
export class AntSpinnerComponent {
  @Input() useSpinner: String = "antload";

  showSpinner: boolean = false;

  constructor(private loadingSpinnerService: AntSpinnerService) { }

  ngOnInit(): void {
    this.loadingSpinnerService.isLoading$.subscribe((showSpinner: boolean) => {
      this.showSpinner = showSpinner;
    });
  }
}
