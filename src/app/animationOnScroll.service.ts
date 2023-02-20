import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationOnScrollService {

  constructor() { }

  animateOnScroll (className:string, animationEndingName:string) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry)=>{
        if (entry.isIntersecting){
          entry.target.classList.add(animationEndingName)
        }
        else {
          entry.target.classList.remove(animationEndingName)
        }
      });
    })

    const elements =  document.querySelectorAll('.' + className);
    elements.forEach((element)=>{
      observer.observe(element);
    })
  }
}
