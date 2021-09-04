import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  objMsg:any;
  constructor() { }

  ngOnInit(): void {

    const obj = of('Anand', 'Shukla', 'Mihir','Soni', 'Ajay', 'Marathi');
    obj.subscribe(
      (res) => {
        setTimeout( ()=>{
          this.print(res, 'elContainer');
        },2000);
        
      }
    );

    const obj2 = of( {a:'Anand', b:'Shukla', c:'Mihir',d:'Soni', e:'Ajay', g:'Marathi'});
    obj2.subscribe(
      (res) => {
        setTimeout( ()=>{
          this.objMsg = res;         
        },2000);
        
      }
    );


  }

  print(val, container){
    const el = document.createElement('li');
    el.innerText = val;
    document.getElementById(container).appendChild(el);
  }
}
