import { Component, OnInit,AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements OnInit,AfterViewInit {

@ViewChild("addBtn") addbtn: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    let counter = 1;
    /**Below you are create observable stream */
    fromEvent(this.addbtn.nativeElement, 'click').subscribe(
      (res) => {
        // console.log(res)
        let counterValue = "Video "+ counter++;
        this.print(counterValue, 'elContainer');

      }
    )
  }

  print(val, container){
    const el = document.createElement('li');
    el.innerText = val;
    document.getElementById(container).appendChild(el);
  }

}
