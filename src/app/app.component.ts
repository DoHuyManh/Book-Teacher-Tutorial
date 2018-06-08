import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit { 

  constructor(private element : ElementRef,private renderer : Renderer){

  }
  ngOnInit() {
    var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
  const number = window.scrollY;
  
  this.renderer.listenGlobal('window', 'scroll', (event) => {
    const number = window.scrollY;
    if (number > 300 || window.pageYOffset > 300) {
      navbar.classList.add('navbar-bg');
    }else{
      navbar.classList.remove('navbar-bg');
    }
});
  
console.log(number);
  console.log(window.pageYOffset);
  }
  title = 'app';
}
