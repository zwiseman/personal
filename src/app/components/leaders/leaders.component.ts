import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MlbService } from '../../services/mlb.service';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit, OnDestroy {
  data: any[];
  location: any[];
  subscription: Subscription;

  constructor(private _mlbService: MlbService) { }

  ngOnInit() {
    this.subscription = this._mlbService.getLeaders().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
