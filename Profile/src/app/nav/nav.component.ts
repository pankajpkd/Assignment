import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navbarOpen = false;
  navbarOpenTwo = false;

  toggleMenubar() {
    this.navbarOpen = !this.navbarOpen;
  }
  toggleNavbar() {    
    this.navbarOpenTwo = !this.navbarOpenTwo;    
  }  

  constructor() { }

  ngOnInit() {
  }

}
