import { Component, OnInit } from '@angular/core';
import { FuncappService } from '../services/funcapp.service';
import { Info } from '../models/info';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedInfo: Info;
  returnedInfo: Info;
  getInfo: Info;

  constructor(private funcapp: FuncappService) { }

  ngOnInit() {
  }

  onClick(): void {
    this.funcapp.tempCall(this.selectedInfo).subscribe((returnedInfo: Info) => {
      this.getInfo = returnedInfo;
    });
  }

}
