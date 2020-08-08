import { Component, OnInit } from '@angular/core';
import { MatTabBody } from '@angular/material/tabs';


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
    var icon = document.getElementById('icon1');
    var navbar = document.getElementById("navbar");
    var attc = document.querySelector('.attach');
    if (x.className === "mobilenav") {
      x.className += " responsive";
      x.classList.add("ymb");
      x.style.display = "block";
      icon.className = "fas fa-times";
      attc.classList.add("hide");
    } else if(x.className != "mobilenav" || document.body.onclick) {
      x.style.display = "none";
      x.className = "mobilenav";
      icon.className = "fa fa-bars";
      attc.classList.remove("hide");

    }
  }
}
