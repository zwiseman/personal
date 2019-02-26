import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal';

  @HostListener('window:resize', ['$event'])
  getScreenWidth(event?): number {
    return window.innerWidth;
  }
}
