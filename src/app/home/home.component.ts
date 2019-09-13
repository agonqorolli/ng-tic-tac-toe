import { Component, OnInit } from '@angular/core';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  versus: string;

  constructor(
    private engineService: EngineService
  ) { }

  pickPlayer(versus: string) {
    this.engineService.setAdversary(versus);
    this.versus = this.engineService.getAdversary();
  }

  ngOnInit() {
    this.versus = this.engineService.getAdversary();
  }
}
