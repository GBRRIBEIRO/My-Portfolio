import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  scrollTo(htmlElement: HTMLElement){
    htmlElement.scrollIntoView({behavior: 'smooth'});
  }
}
