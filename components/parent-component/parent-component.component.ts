import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  standalone: false,

  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.scss',
})
export class ParentComponentComponent {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
