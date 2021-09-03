import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  broadCastSubscription: Subscription;
  broadCastSubscription2: Subscription;
  streamDt:any;
  streamDt2:any;
  constructor() { }

  ngOnInit(): void {
    /** Interval */
    const broadCast = interval(1000);
    this.broadCastSubscription = broadCast.subscribe( 
      (res) => {
        this.streamDt = "Video " + res;
        this.print(this.streamDt, 'elContainer');
        if(res ==10){
          this.broadCastSubscription.unsubscribe();
        }
      }
    )

    /** Timer(delay, interval) */
    const broadCast2 = timer(5000,1000);
    this.broadCastSubscription2 = broadCast2.subscribe(
      (res) => {
        this.streamDt2 = "Video " + res;
        this.print(this.streamDt2, 'elContainer2');
        if(res ==10){
          this.broadCastSubscription2.unsubscribe();
        }
      }
    )

  }

  print(val, container){
    const el = document.createElement('li');
    el.innerText = val;
    document.getElementById(container).appendChild(el);
  }

}
