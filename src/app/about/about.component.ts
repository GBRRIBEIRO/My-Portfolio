import { Component, Directive, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AnimationOnScrollService } from '../animationOnScroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../app.component.css'],

})



export class AboutComponent implements OnInit{

  aos:any

  constructor(animationOnScroll : AnimationOnScrollService){
    this.aos = animationOnScroll;
  }
  ngOnInit(){
    this.aos.animateOnScroll('slide-right', 'slide-right-done');
    this.aos.animateOnScroll('slide-left', 'slide-left-done');
  }


}
