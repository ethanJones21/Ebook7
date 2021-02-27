import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.scss']
})
export class MenuRightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
		const	menu = document.querySelector('.menu');
    this.drop(menu, 'nav-active');
  }

  private drop(element, stringClass){
    if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
  }

}
