import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {

  @Input() textsFromParent!: string;
  count: number = 0;
  interval: any;

  constructor() { 
    console.error('Child constructor called.');    
  }

  ngOnInit(): void {
    console.error('Child ngOnInit called.');  
    
    // this.interval = setInterval(() => {

    //   // this.count = this.count + 1;
    //   // this.count += 1;

    //   console.error(this.count++);
      
    // }, 1000 );

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);    
    console.error('Child ngOnChanges called.');   
  }

  ngOnDestroy(): void {
    // clearInterval(this.interval);
    console.error('Child ngOnDestroy called.');   
  }

}
