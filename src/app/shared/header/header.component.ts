import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "mobilenav") {
      x.className += " responsive";
    } else {
      x.className = "mobilenav";
    }
  }
}
