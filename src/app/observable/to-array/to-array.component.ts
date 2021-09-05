import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  arrData: any;

  fromArr = [
    {name: "anand"},
    {name: "shukla"},
    {name: "neeraj"},
    {name: "Mihir"}
  ]
  toarrayData;
  toarrayUsingOfData;

  constructor() { }

  ngOnInit(): void {
    // Ex 1
    const streamdata = interval(1000);
    streamdata.pipe(
      take(7),
      toArray()
    )
    .subscribe(
      (res) =>{
        // console.log(res);
        this.arrData = res;
      }
    );

    // ex 2 from operator

    const streamdata2 = from(this.fromArr);
    streamdata2.pipe(
      toArray()
    )
    .subscribe(
      (res) => {
        // console.log(res);
        this.toarrayData = JSON.stringify(res);
      }
    );

    // ex 3
      const streamdata3 = of('Anand', 'Shukla', 'Mihir','Soni', 'Ajay', 'Marathi');

      streamdata3.pipe(
        toArray()
      )
      .subscribe(
        (res)=>{
          console.log(res);
          this.toarrayUsingOfData = JSON.stringify(res);
        }
      );

  }

  

}
