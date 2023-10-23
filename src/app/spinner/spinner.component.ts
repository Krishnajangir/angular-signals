import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  isLoading() {
    throw new Error('Method not implemented.');
  }
  loading = signal(true);

  ngOnInit() {
    this.loading.set(false);
  }
}
