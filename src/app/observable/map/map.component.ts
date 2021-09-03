import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  broadCastSubs: Subscription;
  broadCastSubs2: Subscription;
  broadCastSubs3: Subscription;
  msg1: any;
  msg2: any;
  msg3: any;
  constructor() { }

  ngOnInit(): void {

    /** Ex 1 */
    const broadCast = interval(1000);
    this.broadCastSubs = broadCast.pipe( map( data => "Video " +data )).subscribe(
      (res) =>{
        console.log(res);
        this.msg1 = res;
        
      }
    )

    /** Ex 2 */
    const broadCast2 = interval(1000);
    this.broadCastSubs2 = broadCast2.pipe( map( data => 10 + data)).subscribe(
      (res) => {
        this.msg2 = res;
      }
    );

    /** Ex 3 */
    const broadCast3 = interval(1000);
    this.broadCastSubs3 = broadCast3.pipe( map( data => 20 * data)).subscribe(
      (res) => {
        this.msg3 = res;
      }
    );
    setTimeout( () =>{
      this.broadCastSubs.unsubscribe();
      this.broadCastSubs2.unsubscribe();
      this.broadCastSubs3.unsubscribe();
    },10000)

  }

}
