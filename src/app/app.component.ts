import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maa';

  /**
   *
   */
  constructor() {
    //super();
    window.addEventListener("scroll", this.reveal);
    window.addEventListener("scroll", this.reveal1);
    window.addEventListener('resize', this.reveal1);
  }

  reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  reveal1() {
    var reveals = document.querySelectorAll(".footer");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
      console.log(elementTop);
      console.log(windowHeight - elementVisible);
  
      if (elementTop < windowHeight - elementVisible) {
        console.log(document.getElementsByClassName('filters'));
        if (document.getElementsByClassName('filters')[0] != undefined) {
        (<HTMLElement>(document.getElementsByClassName('filters')[0])).style.transform = `translateY(${(elementTop - (windowHeight - elementVisible))}px)`; }
      } else {
        console.log(document.getElementsByClassName('filters'));
        if(document.getElementsByClassName('filters')[0] != undefined) {
        (<HTMLElement>(document.getElementsByClassName('filters')[0])).style.transform = "translateY(0px)";
        }
      }
    }
  }
  
}
