import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    menuOpen=false;

    toggleMenu(){
      this.menuOpen=!this.menuOpen;
      console.log("menutoggled",this.menuOpen);
    }
}
