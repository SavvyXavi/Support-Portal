import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Support Portal';

  constructor (private router: Router) {}

  ngOnInit() {}

  logout() {
    this.router.navigate(['/login']);
  }
}
