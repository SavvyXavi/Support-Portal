import { environment } from './../../../environments/environment.uat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  apiEndPoint = environment.LogoutUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
