import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  data  = [1,2,3,'anand',16,"shukla"];
  promiseData = {
    name: "Neeraj",
    age: 28,
    country: "India"
  }
  objectPromise: any;
  constructor() { }

  ngOnInit(): void {

    const datastream = from(this.data);
    datastream.subscribe(
      (res) => {
        console.log(res);
        this.print(res, 'elContainer');
      }
    );

    /**example 02 */
    const promise = new Promise(resolve =>{
     resolve(this.promiseData)
    });
    const fromPromise = from(promise);
    fromPromise.subscribe(
      (res) => {
        console.log(res);
        this.objectPromise = res;

      }
    )

    /**example 03 */
    const stringdata = from("Bharat Mata Ki Jai");
    stringdata.subscribe(
      (res) => {
        this.print(res, 'elContainer3')
        console.log(res);

      }
    )



  }

  print(val, container){
    const el = document.createElement('li');
    el.innerText = val;
    document.getElementById(container).appendChild(el);
  }

}
