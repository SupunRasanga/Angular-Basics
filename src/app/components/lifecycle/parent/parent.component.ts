import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  //#region 
  isChild: boolean = false;
  someTexts: string = '';

  constructor(private renderer: Renderer2) {
    console.info('Parent constructor called.');
  }

  ngOnInit(): void {
    console.info('Parent ngOnInit called.');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }
//#endregion

}
