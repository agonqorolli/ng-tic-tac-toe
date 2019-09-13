import { Component, OnInit, OnDestroy } from '@angular/core';
import { EngineService } from '../engine.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit, OnDestroy {
  xResult: number = 0;
  oResult: number = 0;
  subscription: Subscription;

  constructor(
    private engineService: EngineService,
  ) {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.engineService.resultSubject.subscribe(value => {
      this.xResult = value['x'];
      this.oResult = value['o'];
    });
  }
}
